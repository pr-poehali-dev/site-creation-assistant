import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GeneratorSection from '@/components/GeneratorSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

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
      
      <Navigation />
      <HeroSection />
      <GeneratorSection
        prompt={prompt}
        setPrompt={setPrompt}
        codeStyle={codeStyle}
        setCodeStyle={setCodeStyle}
        codeColors={codeColors}
        setCodeColors={setCodeColors}
        isGeneratingCode={isGeneratingCode}
        handleGenerate={handleGenerate}
        videoPrompt={videoPrompt}
        setVideoPrompt={setVideoPrompt}
        videoDuration={videoDuration}
        setVideoDuration={setVideoDuration}
        videoStyle={videoStyle}
        setVideoStyle={setVideoStyle}
        isGeneratingVideo={isGeneratingVideo}
        handleGenerateVideo={handleGenerateVideo}
        generatedCode={generatedCode}
        generatedVideo={generatedVideo}
      />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
