import TodoApp from "./TodoApp";
import Footer from "./Footer";
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
    <div className="wrapper">
      <Stats tasks={tasks} />
      <TodoApp
        tasks={tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onCheckTask={handleCheckTask}
      />
      <Footer />
    </div>
  );
}

function Stats({ tasks }) {
  // const numChecked=1
  return (
    <div>
      <h2>
        {tasks.length === 0
          ? "😴 No tasks yet! Time to plan something awesome 🗓️🌟"
          : `You have ${tasks.length} unfinished tasks  📝⏳`}
      </h2>
    </div>
  );
}

export default App;
