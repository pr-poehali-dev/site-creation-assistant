import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-gradient-shift"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">
            Подписка
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Все функции доступны бесплатно. Навсегда.
          </p>

          <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-gradient-shift">
                  <Icon name="Infinity" size={32} className="text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">Бесплатно навсегда</CardTitle>
              <CardDescription className="text-lg text-slate-300">
                Без ограничений и скрытых платежей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-left mb-8">
                {[
                  'Неограниченная генерация сайтов и ботов',
                  'Полный доступ к шаблонам',
                  'Визуальный конструктор',
                  'Экспорт в любых форматах',
                  'Без водяных знаков',
                  'Без правил и ограничений',
                  'Приоритетная поддержка'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-600 hover:from-cyan-600 hover:to-pink-700 shadow-lg shadow-cyan-500/50 animate-gradient-text bg-[length:200%_auto]">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;