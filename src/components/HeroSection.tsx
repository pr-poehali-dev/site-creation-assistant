import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/20">
            <Icon name="Zap" size={16} className="mr-1" />
            Без ограничений • Бесплатно навсегда
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight animate-gradient-text bg-[length:200%_auto]">
            Создавай сайты и ботов за секунды
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
            Мощная AI-платформа для генерации кода. Полный набор инструментов: генератор, шаблоны, конструктор, экспорт. Без правил и ограничений.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать создавать
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть примеры
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
