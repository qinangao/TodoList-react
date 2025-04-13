import Title from "./Title";
import Form from "./Form";
import List from "./List";

function TodoApp({ tasks, onAddTask, onCheckTask, onDeleteTask }) {
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
