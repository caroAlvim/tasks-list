import React from 'react';
import Item from './Item/item';
import style from './List.module.scss';

function List() {
    const tasks = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                    key={index}
                    tarefa={item.tarefa}
                    tempo={item.tempo}
                    />
                ))}
            </ul>

        </aside>
    )
}

export default List;