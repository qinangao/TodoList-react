import Title from "./Title";
import Form from "./Form";
import List from "./List";

function TodoApp({
  onAddTask,
  onCheckTask,
  onDeleteTask,
  filteredTasks,
  inputRef,
}) {
  return (
    <div className="app">
      <Title />
      <Form onAddTask={onAddTask} inputRef={inputRef} />
      <List
        onDeleteTask={onDeleteTask}
        onCheckTask={onCheckTask}
        filteredTasks={filteredTasks}
      />
    </div>
  );
}

export default TodoApp;
