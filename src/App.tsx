import React, { useState } from 'react';
import { TaskStyle, FormStyle, ListStyle } from "./style/style";


type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  nameTask: string;
  done: boolean;
}


function App(): JSX.Element {

  const [newTask, setnewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);




  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask)
    console.log(tasks)
    setnewTask("")
  }

  const addTask = (nameTask: string) => {
    const newTasks: ITask[] = [...tasks, { nameTask, done: false }]
    setTasks(newTasks)
  }

  const changeTask = (index: number) =>{
    const newTasks: ITask[] = [...tasks];
    newTasks[index].done =!newTasks[index].done; 
    setTasks(newTasks);
  }


  return (
    <TaskStyle>
      <FormStyle onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          onChange={e => setnewTask(e.target.value)}
          value={newTask} />
        <button type="submit">enviar</button>
      </FormStyle>
      <div>
        {
          tasks.map((t: ITask, index: number) => {
            return <ListStyle>
              <h2 key={index} className={t.done ? "true":"false"}>{t.nameTask}</h2>
              <div>
                <button onClick={() => changeTask(index)}>
                  {t.done ? "✓" : "✗"}
                </button>
              </div>
            </ListStyle>
          })
        }
      </div>
    </TaskStyle>
  );
}

export default App;
