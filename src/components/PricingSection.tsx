import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Подписка
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Все функции доступны бесплатно. Навсегда.
          </p>

          <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Icon name="Infinity" size={32} className="text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl text-cyan-400">Бесплатно навсегда</CardTitle>
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
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-green-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/50">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
