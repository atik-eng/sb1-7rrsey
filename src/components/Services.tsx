import { Shield, Lock, Server, Users, AlertTriangle, Database, Globe, Settings, ArrowLeftRight, Building2, UserX } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Аутсорсинг информационной безопасности',
      description: 'Комплекс услуг по аутсорсингу задач обеспечения информационной безопасности'
    },
    {
      icon: Lock,
      title: 'Организация защищенного удаленного доступа',
      description: 'Комплексная услуга по переводу сотрудников Вашей компании на удаленную работу'
    },
    {
      icon: Server,
      title: 'Защита критической информационной инфраструктуры',
      description: 'Защита объектов КИИ по 187 ФЗ - информационных систем промышленных предприятий, банков, здравоохранения, транспорта, науки'
    },
    {
      icon: Users,
      title: 'Защита персональных данных',
      description: 'Защита персональных данных клиентов, работников, данных третьих лиц в соответствии со 152 ФЗ'
    },
    {
      icon: AlertTriangle,
      title: 'Тестирование на проникновение (пентест)',
      description: 'Комплекс услуг по тестированию на проникновение информационных ресурсов и инфраструктуры организации'
    },
    {
      icon: Database,
      title: 'Защита конфиденциальной информации',
      description: 'Защита коммерческой и служебной тайны: почта, 1С, CRM, ERP, конструкторско-технол. инф., файловые хранилища'
    },
    {
      icon: Globe,
      title: 'Защита государственных информационных систем',
      description: 'Защита и сопровождение ресурсов государственных и региональных информационных систем и их абонентов'
    },
    {
      icon: Settings,
      title: 'Проектирование и внедрение систем защиты',
      description: 'Построение комплексных систем защиты информации'
    },
    {
      icon: ArrowLeftRight,
      title: 'Импортозамещение',
      description: 'Осуществление проектов по переходу на отечественное ПО'
    },
    {
      icon: Building2,
      title: 'Аудит информационной безопасности банков и финансовых организаций',
      description: 'Независимый аудит информационной безопасности Банков в соответствии с требованиями установленными Банком России'
    },
    {
      icon: UserX,
      title: 'Защита от внутреннего злоумышленника',
      description: 'Контроль действий сотрудников и защита от утечек данных'
    }
  ];

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Полный комплекс услуг</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}