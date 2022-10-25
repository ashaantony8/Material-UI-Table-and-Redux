import { Route, Switch } from "react-router-dom";
import './App.css';
import AddUser from './pages/AddUser';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path="/" component  ={Home}/>
     <Route exact path="/addUser" component  ={AddUser}/>

     </Switch>
    </div>
  );
}

export default App;
