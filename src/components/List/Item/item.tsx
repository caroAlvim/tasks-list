import { ITarefa } from '../../../Types/tasks';
import style from '../List.module.scss'

function Item({tarefa, tempo, selecionado, completado, id }: ITarefa) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>

    )
}

export default Item;
