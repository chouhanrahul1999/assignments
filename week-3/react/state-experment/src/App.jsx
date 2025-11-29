import { createContext, useContext, useState } from "react";
import "./App.css";

const BulbContext = createContext();

const BulbProvider = ({ children }) => {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
};

function App() {
  return (
    <div>
      <BulbProvider children={<LightBulb />} />
    </div>
  );
}

const LightBulb = () => {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
};

const BulbState = () => {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
};

const ToggleBulbState = () => {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  const bulbSwitch = () => {
    setBulbOn(!bulbOn);
  };
  return (
    <div>
      <button onClick={bulbSwitch}>Toggle Bulb</button>
    </div>
  );
};

export default App;
