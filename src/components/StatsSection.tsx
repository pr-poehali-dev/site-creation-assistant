import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Icon from '@/components/ui/icon';

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: 'Users', value: '10,000+', label: 'Счастливых пользователей' },
    { icon: 'Code', value: '50,000+', label: 'Сгенерировано проектов' },
    { icon: 'Video', value: '25,000+', label: 'Создано видео' },
    { icon: 'Zap', value: '100%', label: 'Бесплатно навсегда' }
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-gradient-shift">
                  <Icon name={stat.icon as any} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
