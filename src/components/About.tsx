export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании</h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы - команда экспертов в области информационной безопасности с более чем 10-летним опытом работы. Наша миссия - обеспечить надежную защиту цифровых активов наших клиентов в постоянно меняющемся мире кибербезопасности.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Мы используем передовые технологии и следуем лучшим мировым практикам для создания эффективных систем защиты. Наши специалисты постоянно повышают квалификацию и имеют международные сертификаты в области информационной безопасности.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Клиентов</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">1000+</p>
                <p className="text-gray-600">Проектов</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">50+</p>
                <p className="text-gray-600">Экспертов</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
              alt="Team working"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}