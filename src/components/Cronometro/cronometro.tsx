import Button from "../Button/button";
import Relogio from "./Relogio/relogio";
import style from './Cronometro.module.scss';

function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Button>
                Começar
            </Button>
        </div>

    )
}

export default Cronometro;