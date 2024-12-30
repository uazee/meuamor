import React, { useState, useEffect } from 'react';
import { Sparkles, Wand2 } from 'lucide-react';
import { LoadingScreen } from './components/LoadingScreen';
import { MagicalSparkles } from './components/MagicalSparkles';
import { HogwartsLetter } from './components/HogwartsLetter';
import { MagicalGifts } from './components/MagicalGifts';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowSparkles(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a0f2e] text-white overflow-hidden relative">
      {showSparkles && <MagicalSparkles />}

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12 relative">
            <h1 className="text-6xl font-serif mb-4 text-amber-400 animate-float">
              Feliz Aniversário!
            </h1>
            <div className="flex justify-center gap-4 text-amber-400">
              <Sparkles className="animate-spin-slow" />
              <Wand2 className="animate-wave" />
              <Sparkles className="animate-spin-slow" />
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <HogwartsLetter />
            <MagicalGifts />
          </div>

          <footer className="text-center mt-12 text-amber-400/60">
            <p className="font-serif">
              Vitória Aleixo
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;