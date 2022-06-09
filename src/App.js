import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import WeekList from "./WeekList";
import Detail from "./Detail";


function App() {

  return (
    <div className="App">
      <Route path="/" exact>
        <WeekList />        
      </Route>
      <Route path="/Detail/:day_name" exact component={Detail}>
        {/* <Detail/>         */}
      </Route>
    </div>
  );
}

export default App;

