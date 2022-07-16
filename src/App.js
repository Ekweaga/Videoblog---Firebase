import logo from './logo.svg';
import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom';
import Login from './Authentication/Login';
import Home from './Containers/Home';
import {useState, useEffect} from 'react'
import { fetchUser, userAccessToken } from './utilis/Fetchuser';

function App() {
  const [user, setuser] = useState(null);
  const history = useHistory();


  useEffect(()=>{
      const accessToken = userAccessToken();
      if(!accessToken){
        history.replace("/login");
      }
      else{
        const [userInfo] = fetchUser();
        setuser(userInfo)

      }
  }, [])
  return (
    <div className="App">
     <Switch>
      <Route path="/" exact>
        <Home user={user}/>
      </Route>

      <Route path="/login" exact>
        <Login/>
      </Route>
     </Switch>
    
    </div>
  );
}

export default App;
