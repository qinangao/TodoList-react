import TodoApp from "./TodoApp";
import Footer from "./Footer";

// const list = [
//   { id: 1, description: "Learn React", checked: false },
//   { id: 2, description: "Learn JS", checked: false },
//   { id: 3, description: "Cooking", checked: true },
// ];
function App() {
  return (
    <div className="wrapper">
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
