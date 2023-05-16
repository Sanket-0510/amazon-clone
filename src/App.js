import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Routes, Route} 
from "react-router-dom";
import Basket from './Basket';
import Login from './Login';
import { initializeApp } from 'firebase/app';

function App() {
  // useEffect( () => {
  //   // will only run once when the app component loads...

  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
 <BrowserRouter>
   <div className="App">
    <Routes>
     <Route exact path="/" element={<> <Header/>
       <Home /></>}>
      
     </Route>
     <Route exact path="/login" element={<> <Login/>
       </>}>
      
     </Route>
     <Route exact path="/checkout" element={<> <Header/>
       <Basket  id="3435464" title="this is product 3" image="https://kbimages1-a.akamaihd.net/55873ad1-8ed8-4468-951d-8337872b0f32/1200/1200/False/rich-dad-poor-dad-16.jpg" price={12} rating={4} />
       </>}>
      
     </Route>
     
    </Routes>
   </div>
     
 </BrowserRouter>

  );

}

export default App;
