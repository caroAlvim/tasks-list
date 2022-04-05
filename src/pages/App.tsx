import React, { useState } from 'react';
import Cronometro from '../components/Cronometro/cronometro';
import Form from '../components/Form/form';
import List from '../components/List/list';
import { ITarefa } from '../Types/tasks';
import style from './style.module.scss';

function App() {  
    const [tasks, setTasks] = useState<ITarefa[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Cronometro />
    </div>
  );
}

export default App;
