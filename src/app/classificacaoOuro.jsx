import React, { useState, useEffect } from "react"

const jogadoresIniciais = [
  {
    nome: "GUILHERME",
    pontos: 0,
    vitorias: 0,
    derrotas: 0,
    saldo: 0,
    jogos: 0,
  },
  { nome: "MACARINI", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "PAULO", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "COCA", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "JUNIOR", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "CLAUDINO", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "MANGILI", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "JUAREZ", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "CESAR", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "PAULISTA", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
]

function processarResultados(jogadores,  resultados) {
  const tabela = jogadores.map((j) => ({ ...j }))

  resultados.forEach(({ jogadorA, jogadorB, placar }) => {
    // Só processa se placar estiver preenchido corretamente
    if (!placar || !placar.includes("x")) return

    const [vitoriasA, vitoriasB] = placar.split("x").map(Number)

    // Atualiza jogadorA
    const idxA = tabela.findIndex(
      (j) => j.nome.toUpperCase() === jogadorA.toUpperCase()
    )
    if (idxA !== -1) {
      tabela[idxA].pontos += vitoriasA > vitoriasB ? 1 : 0
      tabela[idxA].vitorias += vitoriasA
      tabela[idxA].derrotas += vitoriasB
      tabela[idxA].saldo += vitoriasA - vitoriasB
      tabela[idxA].jogos += 1
    }

    // Atualiza jogadorB
    const idxB = tabela.findIndex(
      (j) => j.nome.toUpperCase() === jogadorB.toUpperCase()
    )
    if (idxB !== -1) {
      tabela[idxB].pontos += vitoriasB > vitoriasA ? 1 : 0
      tabela[idxB].vitorias += vitoriasB
      tabela[idxB].derrotas += vitoriasA
      tabela[idxB].saldo += vitoriasB - vitoriasA
      tabela[idxB].jogos += 1
    }
  })

  return tabela
}

export default function ClassificacaoOuro() {
  const [jogadores, setJogadores] = useState(jogadoresIniciais)

  useEffect(() => {
    const resultados = [
      { jogadorA: "MACARINI", jogadorB: "PAULO", placar: "3x0" },
      { jogadorA: "CESAR", jogadorB: "PAULISTA", placar: "0x3" },
      { jogadorA: "GUILHERME", jogadorB: "JUAREZ", placar: "3x2" },
      { jogadorA: "COCA", jogadorB: "MANGILI", placar: "3x2" },
      { jogadorA: "JUNIOR", jogadorB: "CLAUDINO", placar: "3x2" },
      { jogadorA: "PAULO", jogadorB: "GUILHERME", placar: "3x1" },
      { jogadorA: "CLAUDINO", jogadorB: "PAULISTA", placar: "2 x 3" },
      { jogadorA: "JUAREZ", jogadorB: "COCA", placar: "1 x 3" },
      { jogadorA: "MANGILI", jogadorB: "JUNIOR", placar: "3 x 1" },
      { jogadorA: "GUILHERME", jogadorB: "CESAR", placar: "2 x 3" },
      { jogadorA: "CLAUDINO", jogadorB: "GUILHERME", placar: "3 x 2" },
      { jogadorA: "PAULISTA", jogadorB: "JUNIOR", placar: "3 x 1" },
      { jogadorA: "CESAR", jogadorB: "COCA", placar: "2 x 3" },
      { jogadorA: "JUAREZ", jogadorB: "MACARINI", placar: "0 x 3" },
      { jogadorA: "PAULO", jogadorB: "MANGILI", placar: "3 x 1" },
      { jogadorA: "JUAREZ", jogadorB: "MANGILI", placar: "2 x 3" },
      { jogadorA: "MACARINI", jogadorB: "CLAUDINO", placar: "3 x 2" },
      { jogadorA: "COCA", jogadorB: "CLAUDINO", placar: "1 x 3" },
      { jogadorA: "JUAREZ", jogadorB: "CESAR", placar: "0 x 3" },
      { jogadorA: "JUNIOR", jogadorB: "COCA", placar: "0 x 3" },
      { jogadorA: "MANGILI", jogadorB: "MACARINI", placar: "1 x 3" },
      { jogadorA: "COCA", jogadorB: "PAULO", placar: "0 x 3" },
      { jogadorA: "PAULO", jogadorB: "JUAREZ", placar: "3 x 0" },
      { jogadorA: "COCA", jogadorB: "GUILHERME", placar: "3 x 2" },
      { jogadorA: "PAULISTA", jogadorB: "GUILHERME", placar: "0 x 3" },
      { jogadorA: "PAULO", jogadorB: "PAULISTA", placar: "3 x 2" },
      { jogadorA: "CESAR", jogadorB: "PAULO", placar: "0 x 3" },
      { jogadorA: "PAULISTA", jogadorB: "COCA", placar: "0 x 3" },
      { jogadorA: "GUILHERME", jogadorB: "MANGILI", placar: "3 x 2" },
      { jogadorA: "CESAR", jogadorB: "JUNIOR", placar: "3 x 0" },
      { jogadorA: "MANGILI", jogadorB: "PAULISTA", placar: "3 x 0" },
      { jogadorA: "JUAREZ", jogadorB: "JUNIOR", placar: "3 x 0" },
      { jogadorA: "GUILHERME", jogadorB: "JUNIOR", placar: "3 x 0" },
      { jogadorA: "JUNIOR", jogadorB: "MACARINI", placar: "0 x 3" },
      { jogadorA: "JUNIOR", jogadorB: "PAULO", placar: "0 x 3" },
      { jogadorA: "MANGILI", jogadorB: "CLAUDINO", placar: "3 x 1" },
      { jogadorA: "PAULO", jogadorB: "CLAUDINO", placar: "3 x 0" },
      { jogadorA: "MACARINI", jogadorB: "COCA", placar: "3 x 0" },
      { jogadorA: "CESAR", jogadorB: "MANGILI", placar: "3 x 2" },
      { jogadorA: "PAULISTA", jogadorB: "JUAREZ", placar: "3 x 0" },
      { jogadorA: "MACARINI", jogadorB: "PAULISTA", placar: "3 x 0" },
      { jogadorA: "GUILHERME", jogadorB: "MACARINI", placar: "1 x 3" },
      { jogadorA: "CLAUDINO", jogadorB: "JUAREZ", placar: "3 x 0" },
      { jogadorA: "CESAR", jogadorB: "MACARINI", placar: "1 x 3" },
      { jogadorA: "CLAUDINO", jogadorB: "CESAR", placar: "1 x 3" },

      // ... (deixe vazio até começar o campeonato)
    ]

    const novaTabela = processarResultados(jogadoresIniciais, resultados)
    setJogadores(novaTabela)
  }, [])

  const jogadoresOrdenados = [...jogadores].sort((a, b) => {
    if (b.pontos !== a.pontos) return b.pontos - a.pontos
    return b.saldo - a.saldo
  })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
        Classificação Série Ouro
      </h2>
      <div className="mb-4 text-center font-semibold text-gray-800">
        Maior tacada até o momento série Ouro: 25 pontos Paulista
      </div>

      {/* CHAVE A */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-center mb-4 bg-gray-800 text-white py-2">
          CHAVE A
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black">
            <thead>
              <tr className="bg-yellow-300">
                <th className="border border-black px-3 py-2 font-bold">JOGO</th>
                <th className="border border-black px-3 py-2 font-bold">DATA</th>
                <th className="border border-black px-3 py-2 font-bold">MESA 1</th>
                <th className="border border-black px-3 py-2 font-bold" colSpan="5">CONFRONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">1</td>
                <td className="border border-black px-3 py-2 text-center">01/07</td>
                <td className="border border-black px-3 py-2 text-center">3º</td>
                <td className="border border-black px-3 py-2 text-center">Coca</td>
                <td className="border border-black px-3 py-2 text-center">1</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center">Claudino</td>
                <td className="border border-black px-3 py-2 text-center">10º</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">2</td>
                <td className="border border-black px-3 py-2 text-center">01/07</td>
                <td className="border border-black px-3 py-2 text-center">5º</td>
                <td className="border border-black px-3 py-2 text-center">Guilherme</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">W.O</td>
                <td className="border border-black px-3 py-2 text-center"></td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">3</td>
                <td className="border border-black px-3 py-2 text-center">01/07	</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Claudino</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Guilherme</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">4</td>
                <td className="border border-black px-3 py-2 text-center">08/07</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Coca</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center0">W.O</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">5</td>
                <td className="border border-black px-3 py-2 text-center">08/07</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 4</td>
                <td className="border border-black px-3 py-2 text-center">Coca</td>
                <td className="border border-black px-3 py-2 text-center">1</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center">Guilherme</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Classificação Chave A */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">1º</div>
            <div className="border border-black px-3 py-2 text-center">Claudino</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">2º</div>
            <div className="border border-black px-3 py-2 text-center">Guilherme</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">3º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">Coca</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">4º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">W.O</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
        </div>
      </div>

      {/* CHAVE B */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-center mb-4 bg-blue-600 text-white py-2">
          CHAVE B
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black">
            <thead>
              <tr className="bg-yellow-300">
                <th className="border border-black px-3 py-2 font-bold">JOGO</th>
                <th className="border border-black px-3 py-2 font-bold">DATA</th>
                <th className="border border-black px-3 py-2 font-bold">MESA 1</th>
                <th className="border border-black px-3 py-2 font-bold" colSpan="5">CONFRONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">1</td>
                <td className="border border-black px-3 py-2 text-center">03/07</td>
                <td className="border border-black px-3 py-2 text-center">4º</td>
                <td className="border border-black px-3 py-2 text-center">Cesar</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Paulista</td>
                <td className="border border-black px-3 py-2 text-center">9º</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">2</td>
                <td className="border border-black px-3 py-2 text-center">03/07</td>
                <td className="border border-black px-3 py-2 text-center">6º</td>
                <td className="border border-black px-3 py-2 text-center">Magilli</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">W.O</td>
                <td className="border border-black px-3 py-2 text-center"></td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">3</td>
                <td className="border border-black px-3 py-2 text-center">03/07</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Cesar</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Magilli</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">4</td>
                <td className="border border-black px-3 py-2 text-center">10/07</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Paulista</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">W.O</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">5</td>
                <td className="border border-black px-3 py-2 text-center">10/07</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 4</td>
                <td className="border border-black px-3 py-2 text-center">Paulista</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">2</td>
                <td className="border border-black px-3 py-2 text-center">Magilli</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Classificação Chave B */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">1º</div>
            <div className="border border-black px-3 py-2 text-center">Cesar</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">2º</div>
            <div className="border border-black px-3 py-2 text-center">Paulista</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">3º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">Mangilli</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">4º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">W.O</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
        </div>
      </div>

      {/* QUARTAS DE FINAIS - CHAVE C */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-center mb-4 bg-gray-800 text-white py-2">
          QUARTAS DE FINAIS
        </h3>
        <h4 className="text-lg font-bold text-center mb-4">
          CHAVE C
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black">
            <thead>
              <tr className="bg-yellow-300">
                <th className="border border-black px-3 py-2 font-bold">JOGO</th>
                <th className="border border-black px-3 py-2 font-bold">DATA</th>
                <th className="border border-black px-3 py-2 font-bold">MESA 1</th>
                <th className="border border-black px-3 py-2 font-bold" colSpan="5">CONFRONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">1</td>
                <td className="border border-black px-3 py-2 text-center">15/07</td>
                <td className="border border-black px-3 py-2 text-center">1º Chave A</td>
                <td className="border border-black px-3 py-2 text-center">Claudino</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Paulista</td>
                <td className="border border-black px-3 py-2 text-center">2º Chave B</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">2</td>
                <td className="border border-black px-3 py-2 text-center">15/07</td>
                <td className="border border-black px-3 py-2 text-center">1º Chave B</td>
                <td className="border border-black px-3 py-2 text-center">Cesar</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Guilherme</td>
                <td className="border border-black px-3 py-2 text-center">2º Chave A</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">3</td>
                <td className="border border-black px-3 py-2 text-center">15/07</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">4</td>
                <td className="border border-black px-3 py-2 text-center">22/07</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center"></td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">5</td>
                <td className="border border-black px-3 py-2 text-center">22/07</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 4</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center"></td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Classificação Chave C */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">1º</div>
            <div className="border border-black px-3 py-2 text-center">vencedor do 3º jogo</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">2º</div>
            <div className="border border-black px-3 py-2 text-center">vencedor do 5º jogo</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">3º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">perdedor do 4º jogo</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">4º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">perdedor do 5º jogo</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
        </div>
      </div>

      {/* SEMI-FINAIS */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-center mb-4 bg-gray-800 text-white py-2">
          SEMI-FINAIS
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black">
            <thead>
              <tr className="bg-yellow-300">
                <th className="border border-black px-3 py-2 font-bold">JOGO</th>
                <th className="border border-black px-3 py-2 font-bold">DATA</th>
                <th className="border border-black px-3 py-2 font-bold">MESA 1</th>
                <th className="border border-black px-3 py-2 font-bold" colSpan="5">CONFRONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">1</td>
                <td className="border border-black px-3 py-2 text-center">17/07</td>
                <td className="border border-black px-3 py-2 text-center">1º / 1º fase</td>
                <td className="border border-black px-3 py-2 text-center">Macarini</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">2º Chave C</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">2</td>
                <td className="border border-black px-3 py-2 text-center">17/07</td>
                <td className="border border-black px-3 py-2 text-center">2º / 1º fase</td>
                <td className="border border-black px-3 py-2 text-center">Paulo</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">1º Chave C</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">3</td>
                <td className="border border-black px-3 py-2 text-center">17/07</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">4</td>
                <td className="border border-black px-3 py-2 text-center">24/07</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center"></td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">5</td>
                <td className="border border-black px-3 py-2 text-center">24/07</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 4</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center"></td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Classificação Semi-finais */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">1º</div>
            <div className="border border-black px-3 py-2 text-center">vencedor do 3º jogo</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">2º</div>
            <div className="border border-black px-3 py-2 text-center">vencedor do 5º jogo</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">3º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">perdedor do 4º jogo</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">4º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">perdedor do 5º jogo</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
        </div>
      </div>

      {/* FINAL */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-center mb-4 bg-black text-white py-2">
          FINAL - 31/07
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black">
            <tbody>
              <tr>
                <td className="border border-black px-6 py-4 text-center font-bold text-lg">1º Colocado</td>
                <td className="border border-black px-6 py-4 text-center font-bold text-xl">X</td>
                <td className="border border-black px-6 py-4 text-center font-bold text-lg">2º Colocado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="py-3 px-4 text-center border font-bold">
                COLOCAÇÃO
              </th>
              <th className="py-3 px-4 text-center border font-bold">ATLETA</th>
              <th className="py-3 px-4 text-center border font-bold">
                PONTOS GANHOS
              </th>
              <th className="py-3 px-4 text-center border font-bold">
                NÚM. VITÓRIA
              </th>
              <th className="py-3 px-4 text-center border font-bold">
                NÚM. DERROTA
              </th>
              <th className="py-3 px-4 text-center border font-bold">
                SALDO DE PARTIDA
              </th>
              <th className="py-3 px-4 text-center border font-bold">
                JOGOS REALIZ.
              </th>
              <th className="py-3 px-4 text-center border font-bold">
                APROV. %
              </th>
            </tr>
          </thead>
          <tbody>
            {jogadoresOrdenados.map((jogador, idx) => (
              <tr
                key={jogador.nome}
                className={
                  idx < 2
                    ? "bg-green-200 hover:bg-green-300 border-l-4 border-l-green-600" // 2 primeiros classificados
                    : idx >= 2 && idx <= 7
                    ? "bg-yellow-50 hover:bg-yellow-100" // 3º ao 8º
                    : "bg-red-100 hover:bg-red-200" // 2 últimos rebaixados
                }
              >
                <td className="py-2 px-4 text-center font-bold border">
                  {idx + 1}
                </td>
                <td className="py-2 px-4 text-center font-medium border">
                  {jogador.nome}
                </td>
                <td className="py-2 px-4 text-center border">
                  {jogador.pontos}
                </td>
                <td className="py-2 px-4 text-center border">
                  {jogador.vitorias}
                </td>
                <td className="py-2 px-4 text-center border">
                  {jogador.derrotas}
                </td>
                <td className="py-2 px-4 text-center border">
                  {jogador.saldo}
                </td>
                <td className="py-2 px-4 text-center border">
                  {jogador.jogos}
                </td>
                <td className="py-2 px-4 text-center font-bold border">
                  {jogador.jogos > 0
                    ? (
                        (jogador.vitorias /
                          (jogador.vitorias + jogador.derrotas)) *
                        100
                      ).toFixed(1) + "%"
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
