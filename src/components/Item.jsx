export default function Item({ task, onDeleteTask, onCheckTask }) {
  return (
    <li>
      <div className="content">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => onCheckTask(task.id)}
        />
        <span className={task.checked ? "checked" : ""}>
          {task.description}
        </span>
      </div>
      <button className="btn--delete" onClick={() => onDeleteTask(task.id)}>
        <img src="/delete.svg" alt="delete-svg" />
      </button>
    </li>
  );
}
