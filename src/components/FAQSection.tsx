import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            FAQ
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-slate-800/50 border border-cyan-500/20 rounded-lg px-6 backdrop-blur-sm">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300">
                Действительно ли это бесплатно?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Да! Абсолютно все функции доступны бесплатно без каких-либо ограничений. Никаких скрытых платежей или премиум-планов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-slate-800/50 border border-cyan-500/20 rounded-lg px-6 backdrop-blur-sm">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300">
                Какие сайты и ботов можно создавать?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Любые! Лендинги, интернет-магазины, блоги, SaaS-приложения, Telegram-ботов, Discord-ботов и многое другое. Без ограничений по функционалу и сложности.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-slate-800/50 border border-cyan-500/20 rounded-lg px-6 backdrop-blur-sm">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300">
                Будут ли водяные знаки на моих проектах?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Нет! Все созданные проекты полностью ваши. Никаких водяных знаков, логотипов или упоминаний платформы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-slate-800/50 border border-cyan-500/20 rounded-lg px-6 backdrop-blur-sm">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300">
                Как работает экспорт кода?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Вы можете экспортировать код в любом формате: React, Vue, HTML/CSS/JS, Python и другие. Полный исходный код доступен для скачивания и использования где угодно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-slate-800/50 border border-cyan-500/20 rounded-lg px-6 backdrop-blur-sm">
              <AccordionTrigger className="text-cyan-400 hover:text-cyan-300">
                Есть ли лимиты на генерацию?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Нет! Создавайте сколько угодно проектов в день. Никаких лимитов на количество генераций, экспортов или использование инструментов.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
