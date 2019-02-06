import React, { Component } from 'react';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';

import './styles/style-global.scss'
import routes, { ROUTERS } from './routers';


class App extends Component {

  render() {
    const
      isLogined = localStorage.getItem('token'),
      pathname = isLogined ? ROUTERS.INDEX : ROUTERS.LOGIN,
      rule = (route) => isLogined ? !route.withoutLogin : route.withoutLogin;

    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={data => (
                rule(route)
                  ? <route.component {...data} />
                  : <Redirect to={{ pathname }} />
              )}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
