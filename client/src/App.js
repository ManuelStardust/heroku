import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Bienvenido al sitio de consulta de actividades.</h2>
        <p>Escribe el tipo de la actividad que deseas consultar:</p>

          <div className="col-9"><input name="type" type="input" className="form-control input-sm" id="input" defaultValue="recreational"  /></div>
          <div className="col-9"><input name="submit" type="submit"/></div>

        <p>{!data ? "Loading..." : data.activity + " - " + data.joke }</p>
      </header>
    </div>
  );
}

export default App;
