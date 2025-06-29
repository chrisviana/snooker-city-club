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
  { nome: "ADALTON", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "JAIR", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  {
    nome: "CHRISTIAN",
    pontos: 0,
    vitorias: 0,
    derrotas: 0,
    saldo: 0,
    jogos: 0,
  },
  { nome: "FELIPE", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "EDUARDO", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "CHAPECÓ", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "EVERTON", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "FABIANO", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  {
    nome: "PAULO SERGIO",
    pontos: 0,
    vitorias: 0,
    derrotas: 0,
    saldo: 0,
    jogos: 0,
  },
  { nome: "AUGUSTO", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "PEDRINHO", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "FERNANDO", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
  { nome: "RENATO", pontos: 0, vitorias: 0, derrotas: 0, saldo: 0, jogos: 0 },
]

function processarResultados(
  jogadores,
  resultados
) {
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
    { jogadorA: "AUGUSTO", jogadorB: "CHRISTIAN", placar: "3x2" },
    { jogadorA: "FERNANDO", jogadorB: "ADALTON", placar: "3x0" },
    { jogadorA: "FELIPE", jogadorB: "PEDRINHO", placar: "3x1" },
    { jogadorA: "RENATO", jogadorB: "CHAPECÓ", placar: "1x3" },
    { jogadorA: "FABIANO", jogadorB: "EDUARDO", placar: "0x3" },
    { jogadorA: "EVERTON", jogadorB: "JAIR", placar: "3x0" },
    { jogadorA: "PAULO SERGIO", jogadorB: "GUILHERME", placar: "1x3" },
    { jogadorA: "PEDRINHO", jogadorB: "RENATO", placar: "3x2" },
    { jogadorA: "ADALTON", jogadorB: "AUGUSTO", placar: "3x0" },
    { jogadorA: "CHRISTIAN", jogadorB: "PAULO SERGIO", placar: "3x0" },
    { jogadorA: "EDUARDO", jogadorB: "EVERTON", placar: "2x3" },
    { jogadorA: "CHAPECÓ", jogadorB: "FERNANDO", placar: "0x3" },
    { jogadorA: "GUILHERME", jogadorB: "FABIANO", placar: "3x0" },
    { jogadorA: "JAIR", jogadorB: "FELIPE", placar: "1x3" },
    { jogadorA: "FELIPE", jogadorB: "EDUARDO", placar: "3x2" },
    { jogadorA: "CHAPECÓ", jogadorB: "ADALTON", placar: "2x3" },
    { jogadorA: "GUILHERME", jogadorB: "EVERTON", placar: "3x1" },
    { jogadorA: "RENATO", jogadorB: "JAIR", placar: "0x3" },
    { jogadorA: "FABIANO", jogadorB: "PAULO SERGIO", placar: "0 x 3" },
    { jogadorA: "ADALTON", jogadorB: "FABIANO", placar: "3 x 0" },
    { jogadorA: "EVERTON", jogadorB: "FABIANO", placar: "3 x 0" },
    { jogadorA: "FABIANO", jogadorB: "PEDRINHO", placar: "0 x 3" },
    { jogadorA: "JAIR", jogadorB: "FABIANO", placar: "3 x 0" },
    { jogadorA: "CHAPECÓ", jogadorB: "FABIANO", placar: "3 x 0" },
    { jogadorA: "FABIANO", jogadorB: "FERNANDO", placar: "0 x 3" },
    { jogadorA: "RENATO", jogadorB: "FABIANO", placar: "3 x 0" },
    { jogadorA: "FABIANO", jogadorB: "FELIPE", placar: "0 x 3" },
    { jogadorA: "AUGUSTO", jogadorB: "FABIANO", placar: "3 x 0" },
    { jogadorA: "FABIANO", jogadorB: "CHRISTIAN", placar: "0 x 3" },
    { jogadorA: "FERNANDO", jogadorB: "PEDRINHO", placar: "0 x 3" },
    { jogadorA: "PEDRINHO", jogadorB: "CHAPECÓ", placar: "0 x 3" },
    { jogadorA: "PEDRINHO", jogadorB: "ADALTON", placar: "0 x 3" },
    { jogadorA: "JAIR", jogadorB: "PEDRINHO", placar: "3 x 0" },
    { jogadorA: "PEDRINHO", jogadorB: "EDUARDO", placar: "0 x 3" },
    { jogadorA: "GUILHERME", jogadorB: "PEDRINHO", placar: "3 x 0" },
    { jogadorA: "PEDRINHO", jogadorB: "CHRISTIAN", placar: "0 x 3" },
    { jogadorA: "AUGUSTO", jogadorB: "PEDRINHO", placar: "3 x 0" },
    { jogadorA: "PEDRINHO", jogadorB: "PAULO SERGIO", placar: "0 x 3" },
    { jogadorA: "EVERTON", jogadorB: "PEDRINHO", placar: "3 x 0" },
    { jogadorA: "AUGUSTO", jogadorB: "PAULO SERGIO", placar: "3 x 0" },
    { jogadorA: "GUILHERME", jogadorB: "FELIPE", placar: "3 x 1" },
    { jogadorA: "JAIR", jogadorB: "FERNANDO", placar: "3 x 2" },
    { jogadorA: "CHRISTIAN", jogadorB: "EVERTON", placar: "3 x 0" },
    { jogadorA: "FERNANDO", jogadorB: "EDUARDO", placar: "3 x 2" },
    { jogadorA: "RENATO", jogadorB: "GUILHERME", placar: "1 x 3" },
    { jogadorA: "CHAPECÓ", jogadorB: "JAIR", placar: "0 x 3" },
    { jogadorA: "FELIPE", jogadorB: "CHRISTIAN", placar: "3 x 1" },
    { jogadorA: "ADALTON", jogadorB: "PAULO SERGIO", placar: "3 x 2" },
    { jogadorA: "EDUARDO", jogadorB: "RENATO", placar: "3 x 0" },
    { jogadorA: "GUILHERME", jogadorB: "FERNANDO", placar: "3 x 1" },
    { jogadorA: "CHRISTIAN", jogadorB: "RENATO", placar: "3 x 0" },
    { jogadorA: "AUGUSTO", jogadorB: "FELIPE", placar: "2 x 3" },
    { jogadorA: "PAULO SERGIO", jogadorB: "EVERTON", placar: "0 x 3" },
    { jogadorA: "JAIR", jogadorB: "ADALTON", placar: "2 x 3" },
    { jogadorA: "FELIPE", jogadorB: "PAULO SERGIO", placar: "3 x 1" },
    { jogadorA: "EVERTON", jogadorB: "AUGUSTO", placar: "3 x 0" },
    { jogadorA: "FERNANDO", jogadorB: "CHRISTIAN", placar: "0 x 3" },
    { jogadorA: "EDUARDO", jogadorB: "CHAPECÓ", placar: "3 x 0" },
    { jogadorA: "GUILHERME", jogadorB: "CHAPECÓ", placar: "3 x 0" },
    { jogadorA: "ADALTON", jogadorB: "EVERTON", placar: "1 x 3" },
    { jogadorA: "AUGUSTO", jogadorB: "FERNANDO", placar: "0 x 3" },
    { jogadorA: "EDUARDO", jogadorB: "JAIR", placar: "1 x 3" },
    { jogadorA: "CHRISTIAN", jogadorB: "CHAPECÓ", placar: "2 x 3" },
    { jogadorA: "PAULO SERGIO", jogadorB: "RENATO", placar: "3 x 2" },
    { jogadorA: "FELIPE", jogadorB: "EVERTON", placar: "2 x 3" },
    { jogadorA: "JAIR", jogadorB: "GUILHERME", placar: "1 x 3" },
    { jogadorA: "CHAPECÓ", jogadorB: "AUGUSTO", placar: "1 x 3" },
    { jogadorA: "GUILHERME", jogadorB: "EDUARDO", placar: "3 x 2" },
    { jogadorA: "FERNANDO", jogadorB: "PAULO SERGIO", placar: "3 x 0" },
    { jogadorA: "EDUARDO", jogadorB: "ADALTON", placar: "0 x 3" },
    { jogadorA: "CHRISTIAN", jogadorB: "JAIR", placar: "3 x 1" },
    { jogadorA: "ADALTON", jogadorB: "FELIPE", placar: "0 x 3" },
    { jogadorA: "CHRISTIAN", jogadorB: "GUILHERME", placar: "2 x 3" },
    { jogadorA: "JAIR", jogadorB: "AUGUSTO", placar: "0 x 3" },
    { jogadorA: "RENATO", jogadorB: "FELIPE", placar: "0 x 3" },
    { jogadorA: "FERNANDO", jogadorB: "EVERTON", placar: "1 x 3" },
    { jogadorA: "EDUARDO", jogadorB: "CHRISTIAN", placar: "2 x 3" },
    { jogadorA: "RENATO", jogadorB: "AUGUSTO", placar: "0 x 3" },
    { jogadorA: "RENATO", jogadorB: "ADALTON", placar: "0 x 3" }, 
    { jogadorA: "FELIPE", jogadorB: "FERNANDO", placar: "2 x 3" },
    { jogadorA: "EVERTON", jogadorB: "CHAPECÓ", placar: "3 x 0" },
    { jogadorA: "ADALTON", jogadorB: "CHRISTIAN", placar: "3 x 2" },
    { jogadorA: "ADALTON", jogadorB: "GUILHERME", placar: "0 x 3" },
    { jogadorA: "FERNANDO", jogadorB: "RENATO", placar: "3 x 0" },
    { jogadorA: "AUGUSTO", jogadorB: "EDUARDO", placar: "3 x 2" },
    { jogadorA: "EVERTON", jogadorB: "RENATO", placar: "3 x 0" },
    { jogadorA: "EDUARDO", jogadorB: "PAULO SERGIO", placar: "3 x 1" },
    { jogadorA: "GUILHERME", jogadorB: "AUGUSTO", placar: "3 x 2" },
    { jogadorA: "PAULO SERGIO", jogadorB: "JAIR", placar: "0 x 3" },
    { jogadorA: "CHAPECÓ", jogadorB: "FELIPE", placar: "0 x 3" },
    { jogadorA: "PAULO SERGIO", jogadorB: "CHAPECÓ", placar: "3 x 1" },






    ]
    const novaTabela = processarResultados(jogadoresIniciais, resultados)
    setJogadores(novaTabela)
  }, [])

  const jogadoresOrdenados = [...jogadores].sort((a, b) => {
    // FABIANO sempre por último
    if (a.nome === "FABIANO") return 1;
    if (b.nome === "FABIANO") return -1;
    
    // PEDRINHO sempre penúltimo (antes só do FABIANO)
    if (a.nome === "PEDRINHO") return 1;
    if (b.nome === "PEDRINHO") return -1;
    
    // Ordenação normal para os demais jogadores
    if (b.pontos !== a.pontos) return b.pontos - a.pontos
    return b.saldo - a.saldo
  })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
        Classificação Série Prata{" "}
      </h2>
      <div className="mb-4 text-center font-semibold text-gray-800">
        Maior tacada até o momento série Prata: 29 pontos Eduardo
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
                <th className="border border-black px-3 py-2 font-bold">MESA 2</th>
                <th className="border border-black px-3 py-2 font-bold" colSpan="5">CONFRONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">1</td>
                <td className="border border-black px-3 py-2 text-center">24/06</td>
                <td className="border border-black px-3 py-2 text-center">3º</td>
                <td className="border border-black px-3 py-2 text-center">Filipe</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Paulo Sergio</td>
                <td className="border border-black px-3 py-2 text-center">10º</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">2</td>
                <td className="border border-black px-3 py-2 text-center">24/06</td>
                <td className="border border-black px-3 py-2 text-center">5º</td>
                <td className="border border-black px-3 py-2 text-center">Christian</td>
                <td className="border border-black px-3 py-2 text-center">1</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center">Jair</td>
                <td className="border border-black px-3 py-2 text-center">8º</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">3</td>
                <td className="border border-black px-3 py-2 text-center">24/06</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Filipe</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">2</td>
                <td className="border border-black px-3 py-2 text-center">Jair</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">4</td>
                <td className="border border-black px-3 py-2 text-center">30/06</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Paulo Sergio</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center">Christian</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">5</td>
                <td className="border border-black px-3 py-2 text-center">30/06</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 4</td>
                <td className="border border-black px-3 py-2 text-center">Christian</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Jair</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Classificação Chave A */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">1º</div>
            <div className="border border-black px-3 py-2 text-center">Filipe</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">2º</div>
            <div className="border border-black px-3 py-2 text-center">vencedor do 5º jogo</div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">CLASSIFICADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">3º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">Paulo Sergio</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center font-bold">ELIMINADO</div>
          </div>
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">4º</div>
            <div className="bg-red-300 border border-black px-3 py-2 text-center">perdedor do 5º jogo</div>
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
                <th className="border border-black px-3 py-2 font-bold">MESA 2</th>
                <th className="border border-black px-3 py-2 font-bold" colSpan="5">CONFRONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">1</td>
                <td className="border border-black px-3 py-2 text-center">26/06</td>
                <td className="border border-black px-3 py-2 text-center">4º</td>
                <td className="border border-black px-3 py-2 text-center">Adalton</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">2</td>
                <td className="border border-black px-3 py-2 text-center">Eduardo</td>
                <td className="border border-black px-3 py-2 text-center">9º</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">2</td>
                <td className="border border-black px-3 py-2 text-center">26/06</td>
                <td className="border border-black px-3 py-2 text-center">6º</td>
                <td className="border border-black px-3 py-2 text-center">Fernando</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center">Augusto</td>
                <td className="border border-black px-3 py-2 text-center">7º</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">3</td>
                <td className="border border-black px-3 py-2 text-center">26/06</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Adalton</td>
                <td className="border border-black px-3 py-2 text-center">3</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">1</td>
                <td className="border border-black px-3 py-2 text-center">Augusto</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">4</td>
                <td className="border border-black px-3 py-2 text-center">02/07</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 1</td>
                <td className="border border-black px-3 py-2 text-center">Eduardo</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Fernando</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 2</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">5</td>
                <td className="border border-black px-3 py-2 text-center">02/07</td>
                <td className="border border-black px-3 py-2 text-center">VENC. JOGO 4</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Augusto</td>
                <td className="border border-black px-3 py-2 text-center">PERD. JOGO 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Classificação Chave B */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="bg-yellow-300 border border-black px-3 py-2 text-center font-bold">1º</div>
            <div className="border border-black px-3 py-2 text-center">Adalton</div>
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
                <th className="border border-black px-3 py-2 font-bold">MESA 2</th>
                <th className="border border-black px-3 py-2 font-bold" colSpan="5">CONFRONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">1</td>
                <td className="border border-black px-3 py-2 text-center">07/07</td>
                <td className="border border-black px-3 py-2 text-center">1º Chave A</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">2º Chave B</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">2</td>
                <td className="border border-black px-3 py-2 text-center">07/07</td>
                <td className="border border-black px-3 py-2 text-center">1º Chave B</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">2º Chave A</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">3</td>
                <td className="border border-black px-3 py-2 text-center">07/07</td>
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
                <td className="border border-black px-3 py-2 text-center">09/07</td>
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
                <td className="border border-black px-3 py-2 text-center">09/07</td>
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
                <th className="border border-black px-3 py-2 font-bold">MESA 2</th>
                <th className="border border-black px-3 py-2 font-bold" colSpan="5">CONFRONTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">1</td>
                <td className="border border-black px-3 py-2 text-center">14/07</td>
                <td className="border border-black px-3 py-2 text-center">1º / 1º fase</td>
                <td className="border border-black px-3 py-2 text-center">Guilherme</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">2º Chave C</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">2</td>
                <td className="border border-black px-3 py-2 text-center">14/07</td>
                <td className="border border-black px-3 py-2 text-center">2º / 1º fase</td>
                <td className="border border-black px-3 py-2 text-center">Everton</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center font-bold">X</td>
                <td className="border border-black px-3 py-2 text-center">0</td>
                <td className="border border-black px-3 py-2 text-center">Nome do Competidor</td>
                <td className="border border-black px-3 py-2 text-center">1º Chave C</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-center font-bold">3</td>
                <td className="border border-black px-3 py-2 text-center">14/07</td>
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
                <td className="border border-black px-3 py-2 text-center">16/07</td>
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
                <td className="border border-black px-3 py-2 text-center">16/07</td>
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

      {/* CLASSIFICAÇÃO FINAL */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-center mb-4 bg-black text-white py-2">
          CLASSIFICAÇÃO FINAL
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black">
            <tbody>
              <tr>
                <td className="border border-black px-6 py-4 text-center font-bold text-lg bg-yellow-400">CAMPEÃO</td>
                <td className="border border-black px-6 py-4 text-center"></td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 text-center font-bold text-lg bg-gray-300">VICE-CAMPEÃO</td>
                <td className="border border-black px-6 py-4 text-center"></td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 text-center font-bold text-lg bg-yellow-600 text-white">3º LUGAR</td>
                <td className="border border-black px-6 py-4 text-center font-bold">3º Colocado</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 text-center font-bold text-lg bg-gray-500 text-white">4º LUGAR</td>
                <td className="border border-black px-6 py-4 text-center font-bold">4º Colocado</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 text-center font-bold text-lg bg-green-600 text-white">MAIOR TACADA</td>
                <td className="border border-black px-6 py-4 text-center"></td>
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
                  jogador.nome === "PEDRINHO" || jogador.nome === "FABIANO"
                  ? "bg-red-300 hover:bg-red-400 border-l-4 border-l-red-600" // PEDRINHO ou FABIANO
                  : idx < 2
                    ? "bg-green-200 hover:bg-green-300 border-l-4 border-l-green-600" // 2 primeiros classificados
                    : idx >= 2 && idx <= 9
                    ? "bg-blue-50 hover:bg-blue-100" // 3º ao 10º
                    : "bg-white hover:bg-gray-100" // restante
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
