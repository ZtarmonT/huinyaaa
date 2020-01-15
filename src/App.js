import React from 'react';
import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';
import Gdtickets from './Gdtickets/gdtickets';
import Airtickets from './Airtickets/airtickets';
import Bustickets from './Bustickets/bustickets';
import Test from './Test/test';
import {BrowserRouter, Route} from "react-router-dom";
// import {Tabs ,Sonnet, Tab } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div> <Header /> </div>
        <Route path="/gdtickets" component={Gdtickets} />
        <Route path="/airtickets" component={Airtickets} />
        <Route path="/bustickets" component={Bustickets} />
        <Route path="/test" component={Test} />
        {/* <Route path="" component={Glavnaya} /> */}
        
        


        
        <div><Footer /></div>
    </div>
    </BrowserRouter>
  );
}



export default App;
