import Item from "./Item";
export default function List({ tasks, onDeleteTask, onCheckTask }) {
  return (
    <div className="list--container">
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
