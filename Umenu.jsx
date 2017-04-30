import React from 'react'
import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'
import {hashHistory} from 'react-router'
import Useritem from './Useritem.jsx'
import Divider from 'muicss/lib/react/divider'
import Boton from 'react-mc-controls/controls/Boton.jsx'
let Goto = (page) => {
  if (window.location.hash !== '#/' + page) {
    hashHistory.replace('/' + page)
  }
}
export default class Umenu extends React.Component {
  render () {
    var pages = [<DropdownItem onClick={() => { Goto('') }}><Boton image={'images/home.png'} span={'Inicio'} /></DropdownItem>]
    for (var key in this.props.pages) {
      pages.push(<DropdownItem onClick={() => { Goto(key) }}><Boton image={'images/' + key + '.png'} span={key.charAt(0).toUpperCase() + key.slice(1)} /></DropdownItem>)
    }
    pages.push(<Divider />)
    pages.push(<Useritem />)

    return (<Dropdown opened={false} color="primary" label={<img src="images/menu.png" />}>
      {pages}
    </Dropdown>)
  }

}
