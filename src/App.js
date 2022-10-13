import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom';
import Login from './Authentication/Login';
import Home from './Containers/Home';
import {useState, useEffect} from 'react'
import { fetchUser, userAccessToken } from './utilis/Fetchuser';

function App() {
  const [user, setuser] = useState(null);
  const history = useHistory();
  const [desktopview, setdesktop] = useState(false);

  const checkScreen= ()=>{
    const windowWith= window.innerWidth
    if(windowWith <= 750){
      setdesktop(true)
     
        return;

    }
    else{
      setdesktop(false)
    }
  }

  useEffect(()=>{
    checkScreen();
    window.addEventListener("resize",checkScreen)
},[])


  useEffect(()=>{
      const accessToken = userAccessToken();
      if(!accessToken){
        history.replace("login");
      }
      else{
        const [userInfo] = fetchUser();
        setuser(userInfo)

      }
  }, [history])
  return (
    <div>
      {
      
        
          <div className="App">
          <Switch>
           <Route path="" exact>
             <Home user={user}/>
           </Route>
     
           <Route path="/login" exact>
             <Login/>
           </Route>
          </Switch>
         
         </div>
        
      }
   
    </div>
  );
}

export default App;
