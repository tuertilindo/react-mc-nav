import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from './Home.jsx'
export default class Page extends React.Component {
  render () {
    var pages = []
    for (var key in this.props.pages) {
      pages.push(<Route path={'/' + key} component={this.props.pages[key]} />)
    }
    for (var keyi in this.props.ids) {
      pages.push(<Route path={'/' + keyi + '/:id'} component={this.props.pages[keyi]} />)
    }
    return (<div>
      <Router history={hashHistory}>
        <Route path="/" component={Home} pages={this.props.pages}>
          <IndexRoute component={this.props.indexPage} />
          {pages}
        </Route>
      </Router>
    </div>
    )
  }

}
