import { ITarefa } from '../../Types/tasks';
import Item from './Item/item';
import style from './List.module.scss';

function List( { tasks }: { tasks: ITarefa[]} ) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                    key={index}
                    {...item}
                    />
                ))}
            </ul>

        </aside>
    )
}

export default List;