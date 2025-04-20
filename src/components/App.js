import TodoApp from "./TodoApp";

import Stats from "./Stats";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(function () {
    const storeValue = localStorage.getItem("tasks");
    return JSON.parse(storeValue);
  });

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="wrapper">
      <Stats tasks={tasks} />
      <TodoApp
        tasks={tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onCheckTask={handleCheckTask}
      />
    </div>
  );
}

export default App;
