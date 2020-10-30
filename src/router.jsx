// import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// import Todo from './Practice/todolist.jsx'

// function Rout() {
//   return (
//       <Router>
//           <Link to ="/Todo"></Link>
//           <Switch>
//               <Route exact path ="/Todo" component={Todo}></Route>
//           </Switch>
//       </Router>

//   )
// }

// export default Rout;
import React from "react";
import Todo from "./Practice/todolist";
import Home from './functional/Home'
// import Counter from "./functional/counterF";
// import Stopwatch from "./functional/stopwatch";
// import Table from "./functional/tableF";
import Form from "./class/formP";

import { BrowserRouter as Router,
     Switch, Route, Link } from "react-router-dom";

export default function Rout() {
  return (
    <Router>
      <div>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li><hr/>
          <li>
            <Link to="/samesamehonachahiye">Todo</Link>
          </li><hr/>
          <li>
            <Link to="/form">Form</Link>
          </li>
          
        </ul>
        <hr />
        <Switch>
        <Route exact path="/">
              <Home/> 

        </Route>
          <Route exact path="/samesamehonachahiye" component={Todo}>
              

        </Route>
          <Route exact path="/form" >
              <Form/>

          </Route>
        </Switch>
      </div>

    </Router>
  );
}
