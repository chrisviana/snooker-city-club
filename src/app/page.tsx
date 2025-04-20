'use client';

import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState('jogosOuro');

  // Jogadores da Série Ouro
  const jogadoresOuro = [
    'MACARINI', 'CLAUDINO', 'MANGILI', 'GUILHERME', 'PADILHA', 
    'CESAR', 'ADALTO', 'COCA', 'JUAREZ', 'PAULISTA'
  ];
  
  // Jogadores da Série Prata
  const jogadoresPrata = [
    'PEDRINHO', 'FUZUE', 'FABIANO', 'PAULO C.', 'PAULO', 'RODRIGO', 
    'AUGUSTO', 'GILBERTO', 'CHRISTIAN', 'FERNANDO', 'JUNIOR', 'RENATO'
  ];
  
  const jogosData = [
    {
      data: '17/09/24',
      jogos: [
        { jogador1: 'FUSUE', placar: '1 X 3', jogador2: 'PAULO', destaque: false },
        { jogador1: 'AUGUSTO', placar: '2 X 1', jogador2: 'RODRIGO', destaque: false }
      ]
    },
  ];
  
  // Definindo o tipo para o jogo
  type Jogo = {
    jogador1: string;
    placar: string;
    jogador2: string;
    destaque: boolean;
  };
  
  // Definindo o tipo para dados de classificação
  type DadosClassificacao = {
    atleta: string;
    pontosGanhos: number | string;
    numVitoria: number | string;
    numDerrota: number | string;
    saldoPartida: number | string;
    jogosRealizados: number | string;
    aproveitamento: string;
  };
  
  // Gerar todos os confrontos possíveis (cada jogador enfrenta todos os outros)
  const gerarConfrontos = (jogadores: string[]): Jogo[] => {
    const confrontos: Jogo[] = [];
    for (let i = 0; i < jogadores.length; i++) {
      for (let j = i + 1; j < jogadores.length; j++) {
        confrontos.push({
          jogador1: jogadores[i],
          placar: '0 X 0', // Placar padrão inicial, pode ser alterado manualmente abaixo
          jogador2: jogadores[j],
          destaque: false
        });
      }
    }
    return confrontos;
  };
  
  // Gerar jogos para as Séries
  const confrontosOuro = gerarConfrontos(jogadoresOuro);
  const confrontosPrata = gerarConfrontos(jogadoresPrata);
  
  // Data de início dos jogos
  const dataInicioOuro = new Date(2025, 5, 5); // 1 de abril de 2025
  const dataInicioPrata = new Date(2025, 5, 5); // 5 de junho de 2025
  
  // Função para verificar se uma data está em um período de jogo ou de intervalo
  const ehDiaDeJogo = (data: Date, dataBase: Date): boolean => {
    // Calcular o número de dias desde a data inicial
    const dataInicioTime = dataBase.getTime();
    const dataTime = data.getTime();
    const diasDesdeInicio = Math.floor((dataTime - dataInicioTime) / (1000 * 60 * 60 * 24));
    
    // A cada 7 dias, temos 4 dias de jogo seguidos por 3 dias de intervalo
    const posicaoNoCiclo = diasDesdeInicio % 7;
    
    // Retorna true se estiver nos primeiros 4 dias do ciclo
    return posicaoNoCiclo < 4;
  };
  
  // Função para obter data formatada como string
  const formatarData = (data: Date): string => {
    return `${data.getDate().toString().padStart(2, '0')}/${(data.getMonth() + 1).toString().padStart(2, '0')}/${data.getFullYear()}`;
  };
  
  // Função para calcular a diferença em dias entre duas datas
  const diasEntreDatas = (data1: Date, data2: Date): number => {
    const diffTime = Math.abs(data2.getTime() - data1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };
  
  // Função para agendar jogos
  const agendarJogos = (confrontos: Jogo[], dataInicio: Date) => {
    // Agendar jogos garantindo que um jogador não jogue mais de uma vez no mesmo dia
    const jogosAgendados: {
      data: string;
      jogos: Jogo[];
    }[] = [];
    
    // Array auxiliar para acompanhar quais jogadores já jogaram em cada data
    const jogadoresPorData: { [key: string]: string[] } = {};
    
    // Mapa para rastrear a última data de jogo de cada jogador
    const ultimaDataDeJogoPorJogador: { [key: string]: Date } = {};
    
    // Inicializar o mapa de última data com data antiga para todos os jogadores
    const jogadoresUnicos = [...new Set(confrontos.flatMap(c => [c.jogador1, c.jogador2]))];
    jogadoresUnicos.forEach(jogador => {
      ultimaDataDeJogoPorJogador[jogador] = new Date(0);
    });
    
    // Criar uma cópia dos confrontos para que possamos removê-los conforme são agendados
    const confrontosRestantes = [...confrontos];
    
    // Data atual para agendamento
    let dataAtual = new Date(dataInicio);
    
    // Continuar agendando jogos até que todos os confrontos estejam agendados
    while (confrontosRestantes.length > 0) {
      // Verificar se esta é uma data válida para jogo
      if (ehDiaDeJogo(dataAtual, dataInicio)) {
        const dataFormatada = formatarData(dataAtual);
        
        // Inicializar o array de jogadores para esta data, se necessário
        if (!jogadoresPorData[dataFormatada]) {
          jogadoresPorData[dataFormatada] = [];
        }
        
        // Encontrar jogos que podem ser agendados para esta data
        const jogosParaHoje: Jogo[] = [];
        
        // Tente agendar até 2 jogos para hoje
        for (let i = 0; i < confrontosRestantes.length && jogosParaHoje.length < 2; i++) {
          const jogo = confrontosRestantes[i];
          const jogador1 = jogo.jogador1;
          const jogador2 = jogo.jogador2;
          
          // Verificar se algum dos jogadores já tem jogo hoje
          if (!jogadoresPorData[dataFormatada].includes(jogador1) && 
              !jogadoresPorData[dataFormatada].includes(jogador2)) {
            
            // Verificar se os jogadores têm intervalo adequado desde seu último jogo
            const diasDesdeUltimoJogoJogador1 = diasEntreDatas(ultimaDataDeJogoPorJogador[jogador1], dataAtual);
            const diasDesdeUltimoJogoJogador2 = diasEntreDatas(ultimaDataDeJogoPorJogador[jogador2], dataAtual);
            
            // Garantir que ambos os jogadores tenham pelo menos 2 dias de intervalo
            if (diasDesdeUltimoJogoJogador1 >= 2 && diasDesdeUltimoJogoJogador2 >= 2) {
              // Adicionar o jogo para hoje e os jogadores à lista de jogadores do dia
              jogosParaHoje.push(jogo);
              jogadoresPorData[dataFormatada].push(jogador1, jogador2);
              
              // Atualizar a última data de jogo para ambos os jogadores
              ultimaDataDeJogoPorJogador[jogador1] = new Date(dataAtual);
              ultimaDataDeJogoPorJogador[jogador2] = new Date(dataAtual);
              
              // Remover este jogo da lista de confrontos restantes
              confrontosRestantes.splice(i, 1);
              i--; // Ajustar o índice porque removemos um item
            }
          }
        }
        
        // Se conseguimos agendar algum jogo para hoje, adicione à lista de jogos agendados
        if (jogosParaHoje.length > 0) {
          jogosAgendados.push({
            data: dataFormatada,
            jogos: jogosParaHoje
          });
        }
      }
      
      // Avançar para o próximo dia
      dataAtual.setDate(dataAtual.getDate() + 1);
      
      // Evitar loop infinito se por alguma razão não conseguirmos agendar todos os jogos
      if (dataAtual.getFullYear() > 2026) {
        console.log("Limite de tempo excedido ao agendar jogos");
        break;
      }
    }
    
    // Ordenar os jogos por data
    jogosAgendados.sort((a, b) => {
      const dataA = a.data.split('/').reverse().join('-');
      const dataB = b.data.split('/').reverse().join('-');
      return dataA.localeCompare(dataB);
    });
    
    return jogosAgendados;
  };
  
  // Agendar jogos para cada série
  const jogosAgendadosOuro = agendarJogos(confrontosOuro, dataInicioOuro);
  const jogosAgendadosPrata = agendarJogos(confrontosPrata, dataInicioPrata);
  
  // =============================================
  // EDITAR MANUALMENTE OS PLACARES ESPECÍFICOS AQUI
  // =============================================
  
  // Inicializar dados de classificação para todos os jogadores
  const dadosClassificacaoOuro: { [key: string]: DadosClassificacao } = {};
  const dadosClassificacaoPrata: { [key: string]: DadosClassificacao } = {};
  
  jogadoresOuro.forEach(jogador => {
    dadosClassificacaoOuro[jogador] = {
      atleta: jogador,
      pontosGanhos: 0,
      numVitoria: 0,
      numDerrota: 0,
      saldoPartida: 0,
      jogosRealizados: 0,
      aproveitamento: '0%'
    };
  });
  
  jogadoresPrata.forEach(jogador => {
    dadosClassificacaoPrata[jogador] = {
      atleta: jogador,
      pontosGanhos: 0,
      numVitoria: 0,
      numDerrota: 0,
      saldoPartida: 0,
      jogosRealizados: 0,
      aproveitamento: '0%'
    };
  });
  
  // Função para atualizar a classificação com base no resultado de um jogo
  const atualizarClassificacao = (jogo: Jogo, dadosClassificacao: { [key: string]: DadosClassificacao }) => {
    // Verificar se o jogo tem um placar válido (não 0 X 0)
    if (jogo.placar === '0 X 0') return;
    
    const [scoreJogador1Str, scoreJogador2Str] = jogo.placar.split('X').map(s => s.trim());
    const scoreJogador1 = parseInt(scoreJogador1Str);
    const scoreJogador2 = parseInt(scoreJogador2Str);
    
    // Verificar se o placar é válido
    if (isNaN(scoreJogador1) || isNaN(scoreJogador2)) return;
    
    const jogador1 = jogo.jogador1;
    const jogador2 = jogo.jogador2;
    
    // Atualizar jogos realizados
    dadosClassificacao[jogador1].jogosRealizados = (dadosClassificacao[jogador1].jogosRealizados as number) + 1;
    dadosClassificacao[jogador2].jogosRealizados = (dadosClassificacao[jogador2].jogosRealizados as number) + 1;
    
    // Determinar vencedor e atualizar estatísticas
    if (scoreJogador1 > scoreJogador2) {
      // Jogador 1 venceu - ganha 1 ponto independente do placar
      dadosClassificacao[jogador1].pontosGanhos = (dadosClassificacao[jogador1].pontosGanhos as number) + 1;
      
      // Número de vitória é o score do vencedor
      dadosClassificacao[jogador1].numVitoria = scoreJogador1;
      // Número de derrota é o score do perdedor
      dadosClassificacao[jogador1].numDerrota = scoreJogador2;
      // Saldo de partida é a diferença entre pontos feitos e tomados
      dadosClassificacao[jogador1].saldoPartida = scoreJogador1 - scoreJogador2;
      
      // Para o perdedor, não registramos numVitoria e numDerrota, apenas saldo
      dadosClassificacao[jogador2].saldoPartida = (dadosClassificacao[jogador2].saldoPartida as number) - (scoreJogador1 - scoreJogador2);
    } else if (scoreJogador2 > scoreJogador1) {
      // Jogador 2 venceu - ganha 1 ponto independente do placar
      dadosClassificacao[jogador2].pontosGanhos = (dadosClassificacao[jogador2].pontosGanhos as number) + 1;
      
      // Número de vitória é o score do vencedor
      dadosClassificacao[jogador2].numVitoria = scoreJogador2;
      // Número de derrota é o score do perdedor
      dadosClassificacao[jogador2].numDerrota = scoreJogador1;
      // Saldo de partida é a diferença entre pontos feitos e tomados
      dadosClassificacao[jogador2].saldoPartida = scoreJogador2 - scoreJogador1;
      
      // Para o perdedor, não registramos numVitoria e numDerrota, apenas saldo
      dadosClassificacao[jogador1].saldoPartida = (dadosClassificacao[jogador1].saldoPartida as number) - (scoreJogador2 - scoreJogador1);
    }
    
    // Atualizar o aproveitamento
    const calcularAproveitamento = (jogador: string) => {
      const jogosRealizados = dadosClassificacao[jogador].jogosRealizados as number;
      const pontosGanhos = dadosClassificacao[jogador].pontosGanhos as number;
      
      if (jogosRealizados === 0) return '0%';
      return `${Math.round((pontosGanhos / jogosRealizados) * 100)}%`;
    };
    
    dadosClassificacao[jogador1].aproveitamento = calcularAproveitamento(jogador1);
    dadosClassificacao[jogador2].aproveitamento = calcularAproveitamento(jogador2);
  };
  
  // Esta função atualiza o placar de um jogo específico entre dois jogadores
  const atualizarPlacar = (jogador1: string, jogador2: string, novoPlacar: string, jogosAgendados: { data: string; jogos: Jogo[] }[], dadosClassificacao: { [key: string]: DadosClassificacao }, destacar: boolean = false) => {
    for (const dataJogos of jogosAgendados) {
      for (const jogo of dataJogos.jogos) {
        // Verificar se este é o jogo que queremos atualizar (em qualquer ordem de jogadores)
        if ((jogo.jogador1 === jogador1 && jogo.jogador2 === jogador2) || 
            (jogo.jogador1 === jogador2 && jogo.jogador2 === jogador1)) {
          jogo.placar = novoPlacar;
          jogo.destaque = destacar;
          
          // Atualizar a classificação com base neste resultado
          atualizarClassificacao(jogo, dadosClassificacao);
          
          return; // Encontrou e atualizou, encerra a função
        }
      }
    }
  };
  
  // Atualizar placares para Série Ouro

  
  // Atualizar placares para Série Prata

  
  // Limpar e reprocessar os dados de classificação para Série Ouro
  jogadoresOuro.forEach(jogador => {
    dadosClassificacaoOuro[jogador] = {
      atleta: jogador,
      pontosGanhos: 0,
      numVitoria: 0,
      numDerrota: 0,
      saldoPartida: 0,
      jogosRealizados: 0,
      aproveitamento: '0%'
    };
  });
  
  // Processar todos os jogos para atualizar a classificação da Série Ouro
  jogosAgendadosOuro.forEach(dataJogos => {
    dataJogos.jogos.forEach(jogo => {
      if (jogo.placar !== '0 X 0') {
        atualizarClassificacao(jogo, dadosClassificacaoOuro);
      }
    });
  });
  
  // Limpar e reprocessar os dados de classificação para Série Prata
  jogadoresPrata.forEach(jogador => {
    dadosClassificacaoPrata[jogador] = {
      atleta: jogador,
      pontosGanhos: 0,
      numVitoria: 0,
      numDerrota: 0,
      saldoPartida: 0,
      jogosRealizados: 0,
      aproveitamento: '0%'
    };
  });
  
  // Processar todos os jogos para atualizar a classificação da Série Prata
  jogosAgendadosPrata.forEach(dataJogos => {
    dataJogos.jogos.forEach(jogo => {
      if (jogo.placar !== '0 X 0') {
        atualizarClassificacao(jogo, dadosClassificacaoPrata);
      }
    });
  });
  
  // Formatar os dados de classificação para exibição
  const formatarDadosClassificacao = (dados: { [key: string]: DadosClassificacao }): DadosClassificacao[] => {
    return Object.values(dados).map(item => {
      // Para jogadores sem jogos, formatamos os dados adequadamente
      if (item.jogosRealizados === 0) {
        return {
          ...item,
          pontosGanhos: '-',
          numVitoria: '-',
          numDerrota: '-',
          saldoPartida: '-',
          aproveitamento: '-'
        };
      }
      return item;
    });
  };
  
  // Ordenar por pontos ganhos (do maior para o menor)
  const classificacaoOuroOrdenada = formatarDadosClassificacao(dadosClassificacaoOuro)
    .sort((a, b) => {
      // Primeiro por pontos ganhos (em ordem decrescente)
      const pontosA = a.pontosGanhos === '-' ? 0 : a.pontosGanhos as number;
      const pontosB = b.pontosGanhos === '-' ? 0 : b.pontosGanhos as number;
      
      if (pontosB !== pontosA) {
        return pontosB - pontosA;
      }
      
      // Em caso de empate, ordenar por saldo de partida
      const saldoA = a.saldoPartida === '-' ? 0 : a.saldoPartida as number;
      const saldoB = b.saldoPartida === '-' ? 0 : b.saldoPartida as number;
      
      return saldoB - saldoA;
    });
  
  const classificacaoPrataOrdenada = formatarDadosClassificacao(dadosClassificacaoPrata)
    .sort((a, b) => {
      // Primeiro por pontos ganhos (em ordem decrescente)
      const pontosA = a.pontosGanhos === '-' ? 0 : a.pontosGanhos as number;
      const pontosB = b.pontosGanhos === '-' ? 0 : b.pontosGanhos as number;
      
      if (pontosB !== pontosA) {
        return pontosB - pontosA;
      }
      
      // Em caso de empate, ordenar por saldo de partida
      const saldoA = a.saldoPartida === '-' ? 0 : a.saldoPartida as number;
      const saldoB = b.saldoPartida === '-' ? 0 : b.saldoPartida as number;
      
      return saldoB - saldoA;
    });
  
  // Usar jogos agendados
  const jogosOuroData = jogosAgendadosOuro;
  const jogosPrataData = jogosAgendadosPrata;
  
  // Usar classificações ordenadas
  const classificacaoOuro = classificacaoOuroOrdenada;
  const classificacaoPrata = classificacaoPrataOrdenada;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-800 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Snooker City Club</h1>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Navegação com abas */}
          <div className="flex flex-wrap border-b">
            <button 
              className={`flex-1 py-3 font-medium ${activeTab === 'jogosOuro' ? 'bg-green-700 text-white' : 'bg-green-100 text-green-800'}`}
              onClick={() => setActiveTab('jogosOuro')}
            >
              Jogos Série Ouro
            </button>
            <button 
              className={`flex-1 py-3 font-medium ${activeTab === 'classificacaoOuro' ? 'bg-green-700 text-white' : 'bg-green-100 text-green-800'}`}
              onClick={() => setActiveTab('classificacaoOuro')}
            >
              Classificação Série Ouro
            </button>
            <button 
              className={`flex-1 py-3 font-medium ${activeTab === 'jogosPrata' ? 'bg-green-700 text-white' : 'bg-green-100 text-green-800'}`}
              onClick={() => setActiveTab('jogosPrata')}
            >
              Jogos Série Prata
            </button>
            <button 
              className={`flex-1 py-3 font-medium ${activeTab === 'classificacaoPrata' ? 'bg-green-700 text-white' : 'bg-green-100 text-green-800'}`}
              onClick={() => setActiveTab('classificacaoPrata')}
            >
              Classificação Série Prata
            </button>
          </div>

          {/* Conteúdo das abas */}
          <div className="p-4">
            {activeTab === 'jogosOuro' && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">Jogos Série Ouro</h2>
                
                {jogosOuroData.map((dataJogos, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-bold mb-2 bg-green-800 text-white p-2">DIA {dataJogos.data}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <tbody>
                          {dataJogos.jogos.map((jogo, jogoIndex) => (
                            <tr 
                              key={jogoIndex} 
                              className={`${jogo.destaque ? 'bg-red-500 text-white' : 'border-b'}`}
                            >
                              <td className="py-3 px-4 text-center font-medium border w-1/3">{jogo.jogador1}</td>
                              <td className="py-3 px-4 text-center font-bold border w-1/3">{jogo.placar}</td>
                              <td className="py-3 px-4 text-center font-medium border w-1/3">{jogo.jogador2}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'classificacaoOuro' && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">Classificação Série Ouro</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-green-700 text-white">
                      <tr>
                        <th className="py-3 px-4 text-center border font-bold">ATLETA</th>
                        <th className="py-3 px-4 text-center border font-bold">PONTOS GANHOS</th>
                        <th className="py-3 px-4 text-center border font-bold">NÚM. VITÓRIA</th>
                        <th className="py-3 px-4 text-center border font-bold">NÚM. DERROTA</th>
                        <th className="py-3 px-4 text-center border font-bold">SALDO DE PARTIDA</th>
                        <th className="py-3 px-4 text-center border font-bold">JOGOS REALIZ.</th>
                        <th className="py-3 px-4 text-center border font-bold">APROV. %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classificacaoOuro.map((item, index) => (
                        <tr 
                          key={index} 
                          className={`${index % 2 === 0 ? 'bg-green-50' : 'bg-white'} hover:bg-green-100`}
                        >
                          <td className="py-2 px-4 text-center font-medium border">{item.atleta}</td>
                          <td className="py-2 px-4 text-center border">{item.pontosGanhos}</td>
                          <td className="py-2 px-4 text-center border">{item.numVitoria}</td>
                          <td className="py-2 px-4 text-center border">{item.numDerrota}</td>
                          <td className="py-2 px-4 text-center border">{item.saldoPartida}</td>
                          <td className="py-2 px-4 text-center border">{item.jogosRealizados}</td>
                          <td className="py-2 px-4 text-center font-bold border">{item.aproveitamento}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'jogosPrata' && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">Jogos Série Prata</h2>
                
                {jogosPrataData.map((dataJogos, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-bold mb-2 bg-green-800 text-white p-2">DIA {dataJogos.data}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <tbody>
                          {dataJogos.jogos.map((jogo, jogoIndex) => (
                            <tr 
                              key={jogoIndex} 
                              className={`${jogo.destaque ? 'bg-red-500 text-white' : 'border-b'}`}
                            >
                              <td className="py-3 px-4 text-center font-medium border w-1/3">{jogo.jogador1}</td>
                              <td className="py-3 px-4 text-center font-bold border w-1/3">{jogo.placar}</td>
                              <td className="py-3 px-4 text-center font-medium border w-1/3">{jogo.jogador2}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'classificacaoPrata' && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">Classificação Série Prata</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-green-700 text-white">
                      <tr>
                        <th className="py-3 px-4 text-center border font-bold">ATLETA</th>
                        <th className="py-3 px-4 text-center border font-bold">PONTOS GANHOS</th>
                        <th className="py-3 px-4 text-center border font-bold">NÚM. VITÓRIA</th>
                        <th className="py-3 px-4 text-center border font-bold">NÚM. DERROTA</th>
                        <th className="py-3 px-4 text-center border font-bold">SALDO DE PARTIDA</th>
                        <th className="py-3 px-4 text-center border font-bold">JOGOS REALIZ.</th>
                        <th className="py-3 px-4 text-center border font-bold">APROV. %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classificacaoPrata.map((item, index) => (
                        <tr 
                          key={index} 
                          className={`${index % 2 === 0 ? 'bg-green-50' : 'bg-white'} hover:bg-green-100`}
                        >
                          <td className="py-2 px-4 text-center font-medium border">{item.atleta}</td>
                          <td className="py-2 px-4 text-center border">{item.pontosGanhos}</td>
                          <td className="py-2 px-4 text-center border">{item.numVitoria}</td>
                          <td className="py-2 px-4 text-center border">{item.numDerrota}</td>
                          <td className="py-2 px-4 text-center border">{item.saldoPartida}</td>
                          <td className="py-2 px-4 text-center border">{item.jogosRealizados}</td>
                          <td className="py-2 px-4 text-center font-bold border">{item.aproveitamento}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-green-900 text-white p-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Snooker City Club - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
