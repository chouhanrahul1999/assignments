import { useState, createContext, useContext, memo } from "react";
import "./App.css";

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider
        value={{
          count,
          setCount,
        }}
      >
        {children}
      </CountContext.Provider>
    </div>
  );
};

function App() {
  return (
    <CountProvider>
      <Count />
    </CountProvider>
  );
}

const Count = memo(() => {
  const { count } = useContext(CountContext);
  return (
    <div>
      {count}
      <Increse />
      <Decrese />
    </div>
  );
});
const Increse = memo(() => {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
    </div>
  );
});

const Decrese = memo(() => {
  const { setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
});

export default App;
