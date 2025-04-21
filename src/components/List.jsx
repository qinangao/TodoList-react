import Item from "./Item";
export default function List({ onDeleteTask, onCheckTask, filteredTasks }) {
  return (
    <div className="list--container">
      <ul>
        {filteredTasks.map((task) => (
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
