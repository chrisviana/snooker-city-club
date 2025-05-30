import React, { useState } from "react"
import { jogos } from "./db/ouro"

const jogadores = [
  "GUILHERME",
  "MACARINI",
  "PAULO",
  "COCA",
  "JUNIOR",
  "CLAUDINO",
  "MANGILI",
  "JUAREZ",
  "CESAR",
  "PAULISTA",
]

// Função determinística: sempre retorna o primeiro elegível
function getArbitro(jogo, jogadoresDoDia, usados = []) {
  const elegiveis = jogadoresDoDia.filter(
    (nome) =>
      nome !== jogo.jogador1 && nome !== jogo.jogador2 && !usados.includes(nome)
  )
  if (elegiveis.length === 0) return "Árbitro indefinido"
  return elegiveis[0]
  // Se quiser variar entre os jogos do dia, use:
  // return elegiveis[jogoIndex % elegiveis.length]
}

export default function TabelaJogosPrata() {
  const [filtroData, setFiltroData] = useState("")
  const [filtroJogador, setFiltroJogador] = useState("")

  const datasUnicas = Array.from(new Set(jogos.map((dia) => dia.data)))

  const jogosFiltrados = jogos
    .filter((dia) => !filtroData || dia.data === filtroData)
    .map((dia) => ({
      ...dia,
      jogos: dia.jogos.filter(
        (jogo) =>
          !filtroJogador ||
          jogo.jogador1 === filtroJogador ||
          jogo.jogador2 === filtroJogador
      ),
    }))
    .filter((dia) => dia.jogos.length > 0)

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div>
          <label className="block mb-1 font-medium text-green-800">
            Filtrar por Data:
          </label>
          <select
            className="border rounded px-2 py-1"
            value={filtroData}
            onChange={(e) => setFiltroData(e.target.value)}
          >
            <option value="">Todas</option>
            {datasUnicas.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium text-green-800">
            Filtrar por Jogador:
          </label>
          <select
            className="border rounded px-2 py-1"
            value={filtroJogador}
            onChange={(e) => setFiltroJogador(e.target.value)}
          >
            <option value="">Todos</option>
            {jogadores.map((nome) => (
              <option key={nome} value={nome}>
                {nome}
              </option>
            ))}
          </select>
        </div>
      </div>

      {jogosFiltrados.length === 0 && (
        <div className="text-center text-gray-600 mt-8">
          Nenhum jogo encontrado para o filtro selecionado.
        </div>
      )}

      {jogosFiltrados.map((dia, idx) => {
        // Pegue os jogos originais do dia para montar a lista de jogadores do dia
        const jogosOriginaisDoDia = jogos.find(
          d => d.data === dia.data && d.mesa === dia.mesa
        )?.jogos || []
        const jogadoresDoDia = Array.from(
          new Set(jogosOriginaisDoDia.flatMap((j) => [j.jogador1, j.jogador2]))
        )
        let arbitrosUsados = []
        return (
          <div
            key={idx}
            className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-2 bg-green-800 text-white p-2">
              DIA {dia.data} - MESA {dia.mesa} às 19h
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {dia.jogos.map((jogo, j) => {
                    // Sorteia árbitro elegível para o jogo (determinístico)
                    const arbitro = getArbitro(
                      jogo,
                      jogadoresDoDia,
                      arbitrosUsados
                      // , j // descomente e ajuste a função se quiser variar pelo índice
                    )
                    if (arbitro !== "Árbitro indefinido") {
                      arbitrosUsados.push(arbitro)
                    }
                    return (
                      <React.Fragment key={j}>
                        <tr className={"bg-white"}>
                          <td className="py-3 px-4 text-center font-medium border w-1/3">
                            {jogo.jogador1}
                          </td>
                          <td className="py-3 px-4 text-center font-bold border w-1/3">
                            {jogo.placar}
                          </td>
                          <td className="py-3 px-4 text-center font-medium border w-1/3">
                            {jogo.jogador2}
                          </td>
                        </tr>
                        <tr className="bg-gray-100">
                          <td
                            colSpan={3}
                            className="py-2 px-4 text-center text-sm text-gray-600"
                          >
                            Árbitro: {arbitro}
                          </td>
                        </tr>
                      </React.Fragment>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
    </div>
  )
}