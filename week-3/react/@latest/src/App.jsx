import { useRef, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/online/class1" element={<Class1program />} />
            <Route path="/neet/online/class2" element={<Class2program />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Layout = () => {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/neet/online/class1">class1</Link>
      <Link to="/neet/online/class2">class2</Link>
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
      footer
    </div>
  );
};

const ErrorPage = () => {
  return <div>errror page</div>;
};

function Class1program() {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  const startClock = () => {
    let value = setInterval(() => {
      setCurrentCount((c) => c + 1);
    }, 1000);
    timer.current = value;
  };

  const stopClock = () => {
    clearInterval(timer.current);
  };
  return (
    <div>
      {currentCount}
      <button onClick={startClock}>start</button>
      <button onClick={stopClock}>stop</button>
    </div>
  );
}
function Class2program() {
  const navigate = useNavigate();
  const rediract = () => {
    navigate("/");
  };
  return (
    <div>
      neet class 2<button onClick={rediract}>go back to landing page</button>
    </div>
  );
}
function Dashboard() {
  const inputRef = useRef();

  function focusOnInputRef() {
    inputRef.current.focus();
  }
  return (
    <div>
      this is Dashboard
      <input type="text" ref={inputRef} />
      <input type="text" />
      <button onClick={focusOnInputRef}>add</button>
    </div>
  );
}

export default App;
