import { useEffect, useState } from "react";
import TodoApp from "./TodoApp";
import Stats from "./Stats";
import Filter from "./Filter";
import useLocalStorageState from "../Custom Hooks/useLocalStorageState";
import useInputFocus from "../Custom Hooks/useInputFocus";

function App() {
  const [tasks, setTasks] = useLocalStorageState([], "tasks");
  const [filterBy, setFilterBy] = useState("all");

  const [inputRef, focusInput] = useInputFocus();

  useEffect(() => {
    focusInput();
  }, []);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
    focusInput();
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

  function handleReset() {
    setTasks([]);
    setFilterBy("all");
    focusInput();
  }

  const filteredTasks = tasks.filter((task) => {
    if (filterBy === "incomplete") return task.checked === false;
    if (filterBy === "completed") return task.checked === true;
    return true;
  });

  return (
    <div className="wrapper">
      <Stats tasks={tasks} />
      <Filter
        tasks={tasks}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        onReset={handleReset}
      />
      <TodoApp
        tasks={tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onCheckTask={handleCheckTask}
        filteredTasks={filteredTasks}
        inputRef={inputRef}
      />
    </div>
  );
}

export default App;
