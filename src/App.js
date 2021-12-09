import React, { useState } from "react";
import "./App.css";
import About from "./Component/About";
import Alert from "./Component/Alert/Alert";
import Navber from "./Component/Navber/Navber";
import TextUtils from "./Component/TextUtils/Textutils";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const ShowAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      ShowAlert("Dard mode has been activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("Dard mode has been deactivated", "success");
    }
  };

  return (
    <>
      <Router>
        <div>
          <Navber name="TextUtils" mode={mode} togglemode={togglemode} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <TextUtils
                    heading="Try TextUtils - word counter, character counter, remove extra spaces"
                    mode={mode}
                    setAlert={ShowAlert}
                  />
                }
              ></Route>
              <Route
                exact
                path="/about"
                element={<About mode={mode} />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
