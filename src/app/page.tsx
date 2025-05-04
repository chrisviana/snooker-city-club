"use client"

import { useState } from "react"
import TabelaJogosOuro from "./tabelaDeJogosOuro"
import TabelaJogosPrata from "./tabelaDeJogosPrata"
import ClassificacaoOuro from "./classificacaoOuro"
import ClassificacaoPrata from "./classificacaoPrata"

export default function Home() {
  const [activeTab, setActiveTab] = useState("jogosOuro")

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
              className={`flex-1 py-3 font-medium ${
                activeTab === "jogosOuro"
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-800"
              }`}
              onClick={() => setActiveTab("jogosOuro")}
            >
              Jogos Série Ouro
            </button>
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === "classificacaoOuro"
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-800"
              }`}
              onClick={() => setActiveTab("classificacaoOuro")}
            >
              Classificação Série Ouro
            </button>
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === "jogosPrata"
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-800"
              }`}
              onClick={() => setActiveTab("jogosPrata")}
            >
              Jogos Série Prata
            </button>
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === "classificacaoPrata"
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-800"
              }`}
              onClick={() => setActiveTab("classificacaoPrata")}
            >
              Classificação Série Prata
            </button>
          </div>

          {/* Conteúdo das abas */}
          <div className="p-4">
            {activeTab === "jogosOuro" && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
                  Jogos Série Ouro
                </h2>
                <TabelaJogosOuro />
              </div>
            )}

            {activeTab === "classificacaoOuro" && <ClassificacaoOuro />}

            {activeTab === "jogosPrata" && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
                  Jogos Série Prata
                </h2>
                <TabelaJogosPrata />
              </div>
            )}

            {activeTab === "classificacaoPrata" && <ClassificacaoPrata />}
          </div>
        </div>
      </div>

      <footer className="bg-green-900 text-white p-4 text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Desenvolvido por Christian Viana -
          Todos os direitos reservados
        </p>
      </footer>
    </div>
  )
}
