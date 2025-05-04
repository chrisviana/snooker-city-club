import React, { useState, useEffect } from 'react';

interface AtualizarPlacarProps {
  serie: 'ouro' | 'prata';
  jogadores: string[];
  onAtualizarPlacar: (jogador1: string, jogador2: string, placar: string) => void;
}

export default function GerenciarPlacar({ serie, jogadores, onAtualizarPlacar }: AtualizarPlacarProps) {
  const [jogador1, setJogador1] = useState<string>('');
  const [jogador2, setJogador2] = useState<string>('');
  const [pontuacaoJogador1, setPontuacaoJogador1] = useState<number>(0);
  const [pontuacaoJogador2, setPontuacaoJogador2] = useState<number>(0);
  const [mensagem, setMensagem] = useState<string>('');
  const [tipoMensagem, setTipoMensagem] = useState<'sucesso' | 'erro' | ''>('');

  const limparFormulario = () => {
    setPontuacaoJogador1(0);
    setPontuacaoJogador2(0);
    setMensagem('');
    setTipoMensagem('');
  };

  // Limpar pontuações quando os jogadores mudam
  useEffect(() => {
    limparFormulario();
  }, [jogador1, jogador2]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jogador1 || !jogador2) {
      setMensagem('Por favor, selecione ambos os jogadores.');
      setTipoMensagem('erro');
      return;
    }
    
    if (jogador1 === jogador2) {
      setMensagem('Não é possível atualizar o placar para o mesmo jogador.');
      setTipoMensagem('erro');
      return;
    }
    
    // Formatar placar no formato "X X Y"
    const novoPlacar = `${pontuacaoJogador1} X ${pontuacaoJogador2}`;
    
    // Chamar a função para atualizar o placar
    onAtualizarPlacar(jogador1, jogador2, novoPlacar);
    
    setMensagem(`Placar atualizado com sucesso: ${jogador1} ${pontuacaoJogador1} X ${pontuacaoJogador2} ${jogador2}`);
    setTipoMensagem('sucesso');
    
    // Limpar apenas as pontuações após atualizar
    setPontuacaoJogador1(0);
    setPontuacaoJogador2(0);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-bold mb-4 text-green-700">Atualizar Placar - Série {serie === 'ouro' ? 'Ouro' : 'Prata'}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Jogador 1</label>
            <select
              value={jogador1}
              onChange={(e) => setJogador1(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Selecione o jogador</option>
              {jogadores.map((jogador) => (
                <option key={`j1-${jogador}`} value={jogador}>
                  {jogador}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-700">Jogador 2</label>
            <select
              value={jogador2}
              onChange={(e) => setJogador2(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Selecione o jogador</option>
              {jogadores.map((jogador) => (
                <option key={`j2-${jogador}`} value={jogador}>
                  {jogador}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-700">Placar</label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="0"
                max="10"
                value={pontuacaoJogador1}
                onChange={(e) => setPontuacaoJogador1(parseInt(e.target.value) || 0)}
                className="w-20 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <span className="text-lg font-bold">X</span>
              <input
                type="number"
                min="0"
                max="10"
                value={pontuacaoJogador2}
                onChange={(e) => setPontuacaoJogador2(parseInt(e.target.value) || 0)}
                className="w-20 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Atualizar Placar
          </button>
        </div>
      </form>
      
      {mensagem && (
        <div className={`mt-4 p-3 rounded-md ${tipoMensagem === 'sucesso' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {mensagem}
        </div>
      )}
    </div>
  );
} 