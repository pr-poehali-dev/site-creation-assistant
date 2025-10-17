import Icon from '@/components/ui/icon';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
