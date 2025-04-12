import { useState } from "react";

// const list = [
//   { id: 1, description: "Learn React", checked: false },
//   { id: 2, description: "Learn JS", checked: false },
//   { id: 3, description: "Cooking", checked: true },
// ];
function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }
  return (
    <div className="app">
      <Title />
      <Form onAddTask={handleAddTask} />
      <List tasks={tasks} />
    </div>
  );
}

function Title() {
  return (
    <div className="title--container">
      <div className="title">
        <img src="/todo.png" alt="logo" />
        <h1>Todo List</h1>
      </div>
      <p>Better plan, better life!</p>
    </div>
  );
}

function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { description, checked: false, id: Date.now() };
    console.log(newTask);

    setDescription("");
    onAddTask(newTask);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="task--input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-add">Add</button>
      </form>
    </div>
  );
}
function List({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Item task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ task }) {
  return (
    <li>
      <input type="checkbox" />
      <span className={task.checked ? "checked" : ""}>{task.description}</span>
      <button className="btn--delete">Delete</button>
    </li>
  );
}

export default App;
