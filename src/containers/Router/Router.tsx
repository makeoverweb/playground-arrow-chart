import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import { STATIC_ROUTES } from 'constants/routes'
import { createBrowserHistory } from 'history'
import { PlaygroundContainer } from 'containers/Playground'
import { ArrowChartPlaygroundContainer } from 'containers/ArrowChartPlayground'


const history = createBrowserHistory()

class RouterContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={STATIC_ROUTES.PLAYGROUND.ROUTE} component={PlaygroundContainer} />
          <Route exact path={STATIC_ROUTES.ARROW_CHART_PLAYGROUND.ROUTE} component={ArrowChartPlaygroundContainer} />
        </Switch>
      </Router>
    )
  }
}

export { RouterContainer }
