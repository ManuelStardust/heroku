import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import services from "./services"

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const consultar = async (e)  => {
      e.preventDefault()

        const data = document.getElementById('type').value;
        const res = await services.actividadesConsultar(data);

        if(res){
          setData(res);
        }

    };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Bienvenido al sitio de consulta de actividades.</h2>
        <p>Escribe el tipo de la actividad que deseas conocer:</p>
          <form id="activityForm" onSubmit={ consultar }>
            <div className="col-9"><input name="type" type="input" className="form-control input-sm" id="type" defaultValue="recreational"  /></div>
            <div className="col-9"><input name="submit" type="submit" value="Enviar"/></div>

          </form>

        <p>{!data ? "Loading..." : "Activity: " + data.activity + " - Joke: " + data.joke }</p>

        <div className="col-9"><a className="App-link" href="/report">Descargar Reporte</a></div>

      </header>
    </div>
  );
}

export default App;
