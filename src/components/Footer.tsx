import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
