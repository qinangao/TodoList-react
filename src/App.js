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

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleCheckTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }
  return (
    <div className="app">
      <Title />
      <Form onAddTask={handleAddTask} />
      <List
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCheckTask={handleCheckTask}
      />
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
      <p>Little tasks, big wins!🐻☕📋</p>
    </div>
  );
}

function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(description.length);
    if (!description) return;
    if (description.length > 25) {
      alert("Input exceeds limit. Try again.");
      setDescription("");
      return;
    }

    const newTask = { description, checked: false, id: Date.now() };

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
function List({ tasks, onDeleteTask, onCheckTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Item
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onCheckTask={onCheckTask}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ task, onDeleteTask, onCheckTask }) {
  return (
    <li>
      <div className="content">
        <input type="checkbox" onClick={() => onCheckTask(task.id)} />
        <span className={task.checked ? "checked" : ""}>
          {task.description}
        </span>
      </div>
      <button className="btn--delete" onClick={() => onDeleteTask(task.id)}>
        <img src="/delete.svg" alt="" />
      </button>
    </li>
  );
}

export default App;
