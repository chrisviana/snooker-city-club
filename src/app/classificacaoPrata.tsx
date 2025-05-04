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

function processarResultados(jogadores, resultados) {
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
      // { jogadorA: "CESAR", jogadorB: "PAULISTA", placar: "3x1" },
      // ... (deixe vazio até começar o campeonato)
    

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
        Classificação Série Prata      </h2>
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
                  idx % 2 === 0
                    ? "bg-green-50 hover:bg-green-100"
                    : "bg-white hover:bg-green-100"
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
