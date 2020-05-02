import React from 'react';

import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import router from "./router"
import Template from "./template/index"
import PNF from "./page/PageNotFound/PNF"
import Login from "./page/Login/login"
const clentrout = value => {
  if (value && value.length > 0) {
    return value.map((item, index) => {
      return <Template
        key={index}
        path={item.path}
        Component={item.component}
        exact={item.exact}


      />
    })
  }
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {clentrout(router)}
          <Route path="/login" component={Login} />
          <Route path="" component={PNF} />

        </Switch>



      </div>



    </BrowserRouter>
  );
}

export default App;
