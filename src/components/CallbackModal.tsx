import { useState } from 'react';
import { X, Check } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    
    if (phoneNumber.length === 0) return '';
    if (phoneNumber[0] !== '7') return '+7';
    
    let formattedNumber = '+7';
    if (phoneNumber.length > 1) {
      formattedNumber += ' (' + phoneNumber.substring(1, 4);
    }
    if (phoneNumber.length > 4) {
      formattedNumber += ') ' + phoneNumber.substring(4, 7);
    }
    if (phoneNumber.length > 7) {
      formattedNumber += '-' + phoneNumber.substring(7, 9);
    }
    if (phoneNumber.length > 9) {
      formattedNumber += '-' + phoneNumber.substring(9, 11);
    }
    
    return formattedNumber;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || value === '+') {
      setPhone('+7');
      return;
    }
    
    const formatted = formatPhoneNumber(value);
    if (formatted.length <= 18) {
      setPhone(formatted);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      alert('Пожалуйста, подтвердите, что вы не робот');
      return;
    }
    if (phone.length < 18) {
      alert('Пожалуйста, введите полный номер телефона');
      return;
    }
    
    // Handle form submission
    console.log({ name, phone, question, token });
    setShowSuccess(true);
    
    // Reset form fields but keep success message visible
    setName('');
    setPhone('');
    setQuestion('');
    setToken(null);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto">
        <div className="min-h-screen px-4 py-8 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative text-center">
            <button
              onClick={() => {
                setShowSuccess(false);
                onClose();
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-2">
                <Check className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Ваш запрос получен
            </h3>
            <p className="text-gray-600">
              В ближайшее время мы свяжемся с Вами
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto">
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center mb-6">
            <p className="text-xl font-medium text-gray-900 mb-2">
              Мы перезвоним Вам в течение нескольких минут
            </p>
            <p className="text-gray-600">
              просто введите свой номер телефона
              и напишите интересующий Вас вопрос
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={handlePhoneChange}
                onFocus={() => {
                  if (!phone) setPhone('+7');
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Ваш вопрос"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-y"
                required
              />
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={setToken}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              disabled={!token}
            >
              Отправить
            </button>

            <p className="text-sm text-gray-600 text-center">
              Нажимая кнопку «Отправить», вы соглашаетесь с нашей{' '}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}