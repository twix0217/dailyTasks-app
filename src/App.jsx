// src/App.jsx
import './App.css';

const App = () => {
  const tasks = [
    { name: 'Task1', Read: true },
    { name: 'Task2', Read: false },
    { name: 'Task3', Read: true },
  ];

  return (
    <>
      <h1>Tasks List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.Read ? 'completed' : 'not-completed'}>
            {task.name}
          </li>
        ))}
      </ul>
    </>
  );
}



export default App;