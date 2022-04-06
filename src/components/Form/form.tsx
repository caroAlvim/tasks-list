import React, { useState } from 'react';
import { ITarefa } from '../../Types/tasks';
import Button from '../Button/button';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Form({ setTasks}: Props) {
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00')

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setTarefa('');
        setTempo('00:00')
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='task'>
                    Adicione um novo estudo
                </label>
                <input
                    type='text'
                    name='task'
                    id='task'
                    value={tarefa}
                    onChange={event => setTarefa(event.target.value)}
                    placeholder='O que você deseja estudar'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input
                    type='time'
                    step='1'
                    name='tempo'
                    value={tempo}
                    onChange={event => setTempo(event.target.value)}
                    id='tempo'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </div>
            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    )

}

// class Form1 extends React.Component<{
//     setTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>
// }> {
//     state = {
//         tarefa: '',
//         tempo: '00:00'
//     }

//     adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
//         event.preventDefault();
//         this.props.setTasks(oldTasks =>
//             [
//                 ...oldTasks,
//                 {
//                     ...this.state,
//                     selecionado: false,
//                     completado: false,
//                     id: uuidv4()
//                 }
//             ]
//         );
//         this.setState({
//             tarefa: '',
//             tempo: '00:00'
//         })
//     }

//     render() {
//         return (
//             <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
//                 <div className={style.inputContainer}>
//                     <label htmlFor='task'>
//                         Adicione um novo estudo
//                     </label>
//                     <input
//                         type='text'
//                         name='task'
//                         id='task'
//                         value={this.state.tarefa}
//                         onChange={event => this.setState({ ...this.state, tarefa: event.target.value })}
//                         placeholder='O que você deseja estudar'
//                         required
//                     />
//                 </div>
//                 <div className={style.inputContainer}>
//                     <label htmlFor='tempo'>
//                         Tempo
//                     </label>
//                     <input
//                         type='time'
//                         step='1'
//                         name='tempo'
//                         value={this.state.tempo}
//                         onChange={event => this.setState({ ...this.state, tempo: event.target.value })}
//                         id='tempo'
//                         min='00:00:00'
//                         max='01:30:00'
//                         required
//                     />
//                 </div>
//                 <Button type='submit'>
//                     Adicionar
//                 </Button>
//             </form>
//         )
//     }
// }

export default Form;
