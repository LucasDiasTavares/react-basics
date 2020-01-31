import React from 'react'

export default function Tarefa({ tarefa, toggleTarefa }) {

    function cuidaTarefaClick() {
        toggleTarefa(tarefa.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={tarefa.complete} onChange={cuidaTarefaClick} />
                {tarefa.nome}
            </label>
        </div>
    )
}
