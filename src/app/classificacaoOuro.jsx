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
