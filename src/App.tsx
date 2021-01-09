import React, { Fragment, useState } from 'react';


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
    const newTasks: ITask[] = [...tasks, {nameTask, done: false}]
    setTasks(newTasks)
  }


  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setnewTask(e.target.value)} value={newTask} />
        <button type="submit">enviar</button>
      </form>
      {
        tasks.map((t: ITask) => {
        return <h1>{t.nameTask}</h1>
        })
      }
    </Fragment>
  );
}

export default App;
