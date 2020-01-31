import React, { useState, useEffect, useRef } from 'react'
import TarefaLista from './TarefaLista'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE = 'tarefaApp.tarefas'

function App() {

  const [tarefas, setTarefas] = useState([])
  const tarefaNomeRef = useRef()

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem(LOCAL_STORAGE))
    if (tarefasSalvas) setTarefas(tarefasSalvas)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(tarefas))
  }, [tarefas])

  function toggleTarefa(id) {
    const novaTarefa = [...tarefas]
    const tarefa = novaTarefa.find(tarefa => tarefa.id === id)
    tarefa.completa = !tarefa.completa
    setTarefas(novaTarefa)
  }

  function cuidaAddTarefa(e) {
    const nome = tarefaNomeRef.current.value
    if (nome === '') return
    setTarefas(tarefasAnteriores => {
      return [...tarefasAnteriores, { id: uuidv4(), nome: nome, completa: false }]
    })
    tarefaNomeRef.current.value = null
  }

  function cuidaLimparTarefas() {
    const novaTarefa = tarefas.filter(tarefa => !tarefa.completa)
    setTarefas(novaTarefa)
  }

  return (
    <>
      <TarefaLista tarefas={tarefas} toggleTarefa={toggleTarefa} />
      <input ref={tarefaNomeRef} type="text" />
      <button onClick={cuidaAddTarefa}>Adicionar</button>
      <button onClick={cuidaLimparTarefas}>Limpar completadas</button>
      <div>{tarefas.filter(tarefa => !tarefa.completa).length} Tarefas a fazer</div>
    </>
  )

}

export default App;
