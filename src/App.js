import "./App.css";
import Panel from "./panel-boczny";
import Srodek from "./srodek";
import Prawo from "./prawo";
import { NavLink, Switch, Route } from 'react-router-dom';
import Rejestracja from "./components/formularz-rejestracji";

function App() {
  return (
    <div className="app">
    {
      <Panel/>
    }
    {
      <Srodek/>
    }
    {
      <Prawo/>
    }
    </div>
  );
}



export default App;
