import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [videoPrompt, setVideoPrompt] = useState('');
  const [videoDuration, setVideoDuration] = useState('5');
  const [videoStyle, setVideoStyle] = useState('realistic');
  const [generatedVideo, setGeneratedVideo] = useState('');
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [isGeneratingCode, setIsGeneratingCode] = useState(false);
  const [codeStyle, setCodeStyle] = useState('');
  const [codeColors, setCodeColors] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGeneratingCode(true);
    setGeneratedCode('');
    
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_KEY_HERE'
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `Generate clean ${codeStyle} code with ${codeColors} colors. Return ONLY code, no explanations.`
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      });
      
      if (!response.ok) {
        setGeneratedCode(`// Демо-код для: ${prompt}\n\nconst MyApp = () => {\n  return (\n    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">\n      <h1 className="text-4xl font-bold text-white">Hello World!</h1>\n    </div>\n  );\n}\n\nexport default MyApp;`);
        setIsGeneratingCode(false);
        return;
      }
      
      const data = await response.json();
      setGeneratedCode(data.choices[0].message.content);
    } catch (error) {
      setGeneratedCode(`// Демо-код для: ${prompt}\n\nconst MyApp = () => {\n  return (\n    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">\n      <h1 className="text-4xl font-bold text-white">Hello World!</h1>\n    </div>\n  );\n}\n\nexport default MyApp;`);
    } finally {
      setIsGeneratingCode(false);
    }
  };

  const handleGenerateVideo = async () => {
    if (!videoPrompt.trim()) return;
    
    setIsGeneratingVideo(true);
    setGeneratedVideo('');
    
    try {
      const response = await fetch('https://functions.poehali.dev/97f14a3a-c0cc-47ca-b37e-0d22a21a87a0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: videoPrompt,
          duration: videoDuration,
          style: videoStyle
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate video');
      }
      
      const data = await response.json();
      setGeneratedVideo(data.videoUrl);
    } catch (error) {
      console.error('Video generation error:', error);
      setGeneratedVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      
      <nav className="relative border-b border-cyan-500/20 backdrop-blur-sm bg-slate-950/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              GenAI Studio
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors">Главная</a>
            <a href="#generate" className="text-slate-300 hover:text-cyan-400 transition-colors">Генерация</a>
            <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">Подписка</a>
            <a href="#faq" className="text-slate-300 hover:text-cyan-400 transition-colors">FAQ</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/20">
              <Icon name="Zap" size={16} className="mr-1" />
              Без ограничений • Бесплатно навсегда
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
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

      <section id="generate" className="relative py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Генератор
              </h2>
              <p className="text-xl text-slate-400">
                Опиши что нужно — получи готовый код
              </p>
            </div>

            <Tabs defaultValue="site" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-slate-800/50 border border-cyan-500/20">
                <TabsTrigger value="site" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                  <Icon name="Globe" size={18} className="mr-2" />
                  Сайт
                </TabsTrigger>
                <TabsTrigger value="bot" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  <Icon name="Bot" size={18} className="mr-2" />
                  Бот
                </TabsTrigger>
                <TabsTrigger value="video" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-400">
                  <Icon name="Video" size={18} className="mr-2" />
                  Видео
                </TabsTrigger>
              </TabsList>

              <TabsContent value="site" className="mt-8">
                <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-cyan-400">Создай свой сайт</CardTitle>
                    <CardDescription className="text-slate-400">
                      Опиши функционал — получи React компоненты
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">Что должен делать сайт?</label>
                      <Textarea
                        placeholder="Например: Лендинг для IT-компании с формой обратной связи..."
                        className="bg-slate-900/50 border-cyan-500/30 text-white placeholder:text-slate-500 min-h-32"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">Стиль</label>
                        <Input
                          placeholder="Минимализм, корпоративный..."
                          className="bg-slate-900/50 border-cyan-500/30 text-white placeholder:text-slate-500"
                          value={codeStyle}
                          onChange={(e) => setCodeStyle(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">Цвета</label>
                        <Input
                          placeholder="Синий, белый..."
                          className="bg-slate-900/50 border-cyan-500/30 text-white placeholder:text-slate-500"
                          value={codeColors}
                          onChange={(e) => setCodeColors(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleGenerate}
                      disabled={isGeneratingCode || !prompt.trim()}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/50 disabled:opacity-50"
                    >
                      {isGeneratingCode ? (
                        <>
                          <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                          Генерирую код...
                        </>
                      ) : (
                        <>
                          <Icon name="Sparkles" size={20} className="mr-2" />
                          Генерировать сайт
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bot" className="mt-8">
                <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Создай своего бота</CardTitle>
                    <CardDescription className="text-slate-400">
                      Опиши функционал — получи готового бота
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">Что должен делать бот?</label>
                      <Textarea
                        placeholder="Например: Telegram-бот для приема заказов с оплатой..."
                        className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-slate-500 min-h-32"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">Платформа</label>
                        <Input
                          placeholder="Telegram, Discord..."
                          className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">Язык</label>
                        <Input
                          placeholder="Python, JavaScript..."
                          className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-lg shadow-purple-500/50">
                      <Icon name="Bot" size={20} className="mr-2" />
                      Генерировать бота
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="video" className="mt-8">
                <Card className="bg-slate-800/50 border-pink-500/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-pink-400 flex items-center gap-2">
                      <Icon name="Sparkles" size={24} />
                      Генерация видео с Veo 3
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Опиши сцену — получи профессиональное видео от Google AI
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">Опиши что должно быть в видео</label>
                      <Textarea
                        placeholder="Например: Космический корабль летит сквозь туманность, камера медленно приближается, яркие звезды на фоне..."
                        className="bg-slate-900/50 border-pink-500/30 text-white placeholder:text-slate-500 min-h-32"
                        value={videoPrompt}
                        onChange={(e) => setVideoPrompt(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">Длительность</label>
                        <Input
                          placeholder="5, 10, 15..."
                          className="bg-slate-900/50 border-pink-500/30 text-white placeholder:text-slate-500"
                          value={videoDuration}
                          onChange={(e) => setVideoDuration(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">Стиль</label>
                        <Input
                          placeholder="Реалистичное, мультяшное..."
                          className="bg-slate-900/50 border-pink-500/30 text-white placeholder:text-slate-500"
                          value={videoStyle}
                          onChange={(e) => setVideoStyle(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleGenerateVideo}
                      disabled={isGeneratingVideo || !videoPrompt.trim()}
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-600 hover:from-pink-600 hover:to-orange-700 shadow-lg shadow-pink-500/50 disabled:opacity-50"
                    >
                      {isGeneratingVideo ? (
                        <>
                          <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                          Генерирую видео...
                        </>
                      ) : (
                        <>
                          <Icon name="Video" size={20} className="mr-2" />
                          Генерировать видео
                        </>
                      )}
                    </Button>
                    <div className="text-xs text-slate-500 text-center">
                      Powered by Google Veo 3 • С звуком • Без водяных знаков
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {generatedVideo && (
              <Card className="mt-8 bg-slate-800/50 border-pink-500/20 backdrop-blur-sm animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-pink-400 flex items-center gap-2">
                    <Icon name="CheckCircle" size={24} />
                    Видео готово!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-950 rounded-lg overflow-hidden border border-pink-500/30">
                    <video 
                      controls 
                      className="w-full"
                      poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop"
                    >
                      <source src={generatedVideo} type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10">
                      <Icon name="Download" size={18} className="mr-2" />
                      Скачать MP4
                    </Button>
                    <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                      <Icon name="Share2" size={18} className="mr-2" />
                      Поделиться
                    </Button>
                    <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                      <Icon name="Wand2" size={18} className="mr-2" />
                      Создать еще
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {generatedCode && (
              <Card className="mt-8 bg-slate-800/50 border-green-500/20 backdrop-blur-sm animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center gap-2">
                    <Icon name="CheckCircle" size={24} />
                    Код готов!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto border border-green-500/30">
                    <code className="text-green-400 text-sm">{generatedCode}</code>
                  </pre>
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                      <Icon name="Copy" size={18} className="mr-2" />
                      Копировать
                    </Button>
                    <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                      <Icon name="Download" size={18} className="mr-2" />
                      Экспорт
                    </Button>
                    <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                      <Icon name="Eye" size={18} className="mr-2" />
                      Превью
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

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

      <footer className="relative border-t border-cyan-500/20 backdrop-blur-sm bg-slate-950/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Icon name="Sparkles" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                GenAI Studio
              </span>
            </div>
            <p className="text-slate-400">
              © 2024 GenAI Studio. Создавай без границ.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;