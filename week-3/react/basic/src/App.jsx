import { useDebugValue, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "go to gym",
      description: "go to gym at 6 pm",
      completion: false,
    },
    {
      title: "go to gym",
      description: "go to gym at 6 pm",
      completion: false,
    },
  ]);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");

  const addTodo = () => {
  const todoTitle = title;
  const todoDescription = description;
    setTodo([...todo, {
      title: todoTitle,
      description: todoDescription
    }])
  }

  return (
    <div>
      {todo.map((todos) => {
        return (
          <TodoComponent title={todos.title} description={todos.description} />
        );
      })}
      <input onChange={e => setTitle(e.target.value)} type="text" name=""/>
      <input type="text" onChange={e => setDescription(e.target.value)}  />
      <button onClick={addTodo}>add todo</button>
    </div>
  );
}
const TodoComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
};

// const CustomButton = (props) => {
//   return (
//      <button
//         onClick={() => {
//           props.setCount(props.count + 1);
//         }}
//       >
//         Counter: {props.count}
//       </button>
//   )
// }
export default App;
