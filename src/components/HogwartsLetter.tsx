import { Scroll } from 'lucide-react';

export function HogwartsLetter() {
  return (
    <div className="bg-[#2a1b3d] p-8 rounded-lg shadow-magical relative overflow-hidden">
      <Scroll className="absolute top-4 right-4 text-amber-400" />
      <h2 className="text-2xl font-serif mb-4 text-amber-400">ESCOLA DE MAGIA E BRUXARIA DE HOGWARTS</h2>
      <p className="mb-4 font-serif">
        Cara Aniversariante,
      </p>
      <p className="mb-4">
        Temos o prazer de informar que você foi especialmente selecionada para celebrar seu aniversário na Escola de Magia e Bruxaria de Hogwarts. Esta é uma ocasião extraordinária, pois o próprio castelo preparou uma celebração mágica em sua homenagem.
      </p>
      <p className="italic text-amber-400">
        "A felicidade pode ser encontrada mesmo nas horas mais sombrias, se você lembrar de acender a luz."
      </p>
    </div>
  );
}