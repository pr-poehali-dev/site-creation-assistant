import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface GeneratorSectionProps {
  prompt: string;
  setPrompt: (value: string) => void;
  codeStyle: string;
  setCodeStyle: (value: string) => void;
  codeColors: string;
  setCodeColors: (value: string) => void;
  isGeneratingCode: boolean;
  handleGenerate: () => void;
  videoPrompt: string;
  setVideoPrompt: (value: string) => void;
  videoDuration: string;
  setVideoDuration: (value: string) => void;
  videoStyle: string;
  setVideoStyle: (value: string) => void;
  isGeneratingVideo: boolean;
  handleGenerateVideo: () => void;
  generatedCode: string;
  generatedVideo: string;
}

const GeneratorSection = ({
  prompt,
  setPrompt,
  codeStyle,
  setCodeStyle,
  codeColors,
  setCodeColors,
  isGeneratingCode,
  handleGenerate,
  videoPrompt,
  setVideoPrompt,
  videoDuration,
  setVideoDuration,
  videoStyle,
  setVideoStyle,
  isGeneratingVideo,
  handleGenerateVideo,
  generatedCode,
  generatedVideo
}: GeneratorSectionProps) => {
  return (
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
  );
};

export default GeneratorSection;
