import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Authentication/Login';
import Home from './Containers/Home';

function App() {
  return (
    <div className="App">
     <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="/login" exact>
        <Login/>
      </Route>
     </Switch>
    
    </div>
  );
}

export default App;
