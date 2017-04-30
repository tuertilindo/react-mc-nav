import React from 'react'
import Umenu from './Umenu.jsx'
import Appbar from 'muicss/lib/react/appbar'
export default class Page extends React.Component {
  render () {
    return (
      <div className="topmenu">
        <Appbar className="mui--z1">
          <Umenu pages={this.props.pages || this.props.route.pages} />
        </Appbar>
        {this.props.children}
      </div>
    )
  }

}
