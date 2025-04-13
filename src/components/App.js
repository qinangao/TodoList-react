import TodoApp from "./TodoApp";
import Footer from "./Footer";
import Stats from "./Stats";
import { useState } from "react";

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
    <div className="wrapper">
      <Stats tasks={tasks} />
      <TodoApp
        tasks={tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onCheckTask={handleCheckTask}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
