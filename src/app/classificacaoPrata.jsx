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




    ]
    const novaTabela = processarResultados(jogadoresIniciais, resultados)
    setJogadores(novaTabela)
  }, [])

  const jogadoresOrdenados = [...jogadores].sort((a, b) => {
    // Colocar PEDRINHO e FABIANO nos últimos lugares
    if (a.nome === "PEDRINHO" || a.nome === "FABIANO") return 1;
    if (b.nome === "PEDRINHO" || b.nome === "FABIANO") return -1;
    
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
        Maior tacada até o momento série Prata: 19 pontos Christian
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
