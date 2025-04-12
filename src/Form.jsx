import { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(description.length);
    if (!description) return;
    if (description.length > 25) {
      alert("Input exceeds limit. Try again.");
      setDescription("");
      return;
    }

    const newTask = { description, checked: false, id: Date.now() };

    setDescription("");
    console.log(onAddTask);
    onAddTask(newTask);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="task--input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-add">Add</button>
      </form>
    </div>
  );
}
