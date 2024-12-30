import { Wand2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Wand2 className="animate-bounce text-amber-400" size={48} />
    </div>
  );
}