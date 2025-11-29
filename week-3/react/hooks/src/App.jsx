import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counterVisible, setCounterVesible] = useState(true);
  const [count, setCount] = useState(0);

 useEffect(() => {
     const visible = setInterval(() => {
      setCounterVesible(c => !c);
    }, 3000);

    return () => clearInterval(visible)
  }, []);
  
  useEffect(() => {
   const clock = setInterval(() => {
    setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(clock)

  }, []);

  return <>{counterVisible && <Counter count={count} setCount={setCount} />}</>;
}

const Counter = ({count, setCount}) => {

   
  

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        counter
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrese
      </button>
    </div>
  );
};

export default App;
