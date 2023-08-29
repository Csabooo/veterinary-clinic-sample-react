import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {

  const [isValid, setValid] = useState(false);

  console.log(isValid);

  const saveStateHandler = (enteredStateData) => {
    setValid(!enteredStateData);

  }

  return (
    <div>
      <div className={isValid ? "showcase" : "showcase active"}>
        <Header onSaveState={saveStateHandler} />
        <Main />
      </div>
      <Menu />
    </div>
  )
}

export default App;