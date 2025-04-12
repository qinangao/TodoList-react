import Title from "./Title";
import Form from "./Form";
import List from "./List";

// const list = [
//   { id: 1, description: "Learn React", checked: false },
//   { id: 2, description: "Learn JS", checked: false },
//   { id: 3, description: "Cooking", checked: true },
// ];
function TodoApp({ tasks, onAddTask, onCheckTask, onDeleteTask }) {
  // const [tasks, setTasks] = useState([]);

  // function handleAddTask(task) {
  //   setTasks((tasks) => [...tasks, task]);
  // }

  // function handleDeleteTask(id) {
  //   setTasks((tasks) => tasks.filter((task) => task.id !== id));
  // }

  // function handleCheckTask(id) {
  //   setTasks((tasks) =>
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, checked: !task.checked } : task
  //     )
  //   );
  // }
  return (
    <div className="app">
      <Title />
      <Form onAddTask={onAddTask} />
      <List
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onCheckTask={onCheckTask}
      />
    </div>
  );
}

export default TodoApp;
