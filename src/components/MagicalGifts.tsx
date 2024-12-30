import { Gift, Wand2, CakeSlice, Sparkles } from 'lucide-react';

export function MagicalGifts() {
  return (
    <div className="bg-[#2a1b3d] p-8 rounded-lg shadow-magical relative overflow-hidden invisibility-cloak group">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity">
        <span className="text-amber-400 text-lg">Passe o mouse para revelar...</span>
      </div>
      <Gift className="absolute top-4 right-4 text-amber-400" />
      <h2 className="text-2xl font-serif mb-4 text-amber-400">Seus Presentes Mágicos</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-2">
          <Wand2 className="text-amber-400" size={20} />
          <span>Uma varinha personalizada da Olivaras</span>
        </li>
        <li className="flex items-center gap-2">
          <CakeSlice className="text-amber-400" size={20} />
          <span>Bolo de aniversário mágico das cozinhas de Hogwarts</span>
        </li>
        <li className="flex items-center gap-2">
          <Sparkles className="text-amber-400" size={20} />
          <a 
            href="https://www.wizardingworld.com/writing-by-jk-rowling/hogwarts-houses" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            Desejos especiais de aniversário das quatro casas
          </a>
        </li>
      </ul>
    </div>
  );
}