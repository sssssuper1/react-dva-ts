import React from 'react'
import { Router as RouterProps } from 'dva'
import { Router, Route, Switch } from 'dva/router'

import Home from './pages/home'

const Routers: RouterProps = function(props) {
  const { history } = props!
  return <Router history={history}>
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </Router>
}

export default Routers