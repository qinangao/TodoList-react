const list = [
  { id: 1, task: "Learn React", checked: false },
  { id: 2, task: "Learn JS", checked: false },
  { id: 3, task: "Cooking", checked: true },
];
function App() {
  return (
    <div className="app">
      <Title />
      <Form />
      <List />
    </div>
  );
}

function Title() {
  return (
    <div className="title--container">
      <div className="title">
        <img src="/todo.png" alt="logo" />
        <h1>Todo List</h1>
      </div>
      <p>Better plan, better life!</p>
    </div>
  );
}
function Form() {
  return (
    <div>
      <form>
        <input className="task--input" type="text" />
        <button className="btn-add">Add</button>
      </form>
    </div>
  );
}
function List() {
  return (
    <div>
      <ul>
        {list.map((task) => (
          <Item task={task} />
        ))}
      </ul>
    </div>
  );
}

function Item({ task }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{task.task}</span>
      <button className="btn--delete">Delete</button>
    </li>
  );
}

export default App;
