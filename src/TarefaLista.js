import React from 'react'
import Tarefa from './Tarefa'

export default function TarefaLista({ tarefas, toggleTarefa }) {
    return (
        tarefas.map(tarefa => {
            return <Tarefa key={tarefa.id} toggleTarefa={toggleTarefa} tarefa={tarefa} />
        })
    )
}
