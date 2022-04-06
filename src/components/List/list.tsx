import { ITarefa } from '../../Types/tasks';
import Item from './Item/item';
import style from './List.module.scss';

interface Props {
    tasks: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tasks, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>

        </aside>
    )
}

export default List;