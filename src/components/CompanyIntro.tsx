import { LogoIcon } from './Icons/Header';

export default function CompanyIntro() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/4">
            <LogoIcon variant="dark" className="w-full h-auto max-w-[250px] mx-auto" />
          </div>

          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              CyberGuard - системный Интегратор решений в области информационной безопасности
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Компания «CyberGuard» - ведущий системный интегратор решений в области обеспечения информационной безопасности, работающий на рынке информационных технологий с 2001 года.
              </p>
              
              <p className="text-lg">
                В компании работает несколько десятков технических специалистов, регулярно проходящих дополнительное обучение, с упором на инновационные технологии в информационной безопасности. Специалисты технической поддержки окажут квалифицированную помощь, компетентно ответив на любой возникший вопрос.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}