import { useRef, useState } from "react";
import "./App.css";

import { useFetch }from "./hooks/useFetch";
import { usePrev } from "./hooks/UsePrev";

function useCounter() {
  const [count, setCount] = useState(0);
  const prev = usePrev(count);

  const IncreseCount = () => {
    setCount((count) => count + 1);
  };

  return {
    count,
    IncreseCount,
    prev
  };
}

function useDebounce() {
  const currentClock = useRef()
     const fn = () => {
      clearTimeout(currentClock.current);
      currentClock.current = setTimeout(origionalfn, 30)
     }
}

function App() {
  const { count, IncreseCount, prev } = useCounter();

  const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  if(loading) {
    return <div>
      loading.....
    </div>
  }
  function sendDataToBackend() {
    fetch("api,amazone.com/search")
  }

  const debounceFn = useDebounce(sendDataToBackend)
  
  return (
    <>
      <button onClick={IncreseCount}>{count} button</button>
      <h1>{prev}</h1>
      <div>{finalData.title}</div>
      <input type="text" onChange={debounceFn} />
    </>
  );
}

export default App;
