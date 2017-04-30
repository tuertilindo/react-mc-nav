import React from 'react'
import Reflux from 'reflux'
import DropdownItem from 'muicss/lib/react/dropdown-item'
import Boton from 'react-mc-controls/controls/Boton.jsx'
import Ustore from 'react-mc-google'
import Uactions from 'react-mc-google/Uactions.jsx'
import ObjectAssign from 'object-assign'
export default class Uitem extends Reflux.Component {
  constructor (props) {
    super(props)
    this.state = ObjectAssign({
      name: 'Iniciando sesión...',
      image: 'images/loading.gif',
      status: 'CONNECTING'
    }, window.mcuser)
    this.mapStoreToState(Ustore, this.configureState)
  }
  configureState (fromStore) {
    var obj = {
      status: fromStore.status
    }
    if (fromStore.status) {
      if (fromStore.status === 'ONLINE') {
        obj.name = fromStore.first_name || fromStore.name
        obj.image = fromStore.image
        obj.action = () => {}
      } else if (fromStore.status === 'CONNECTING') {
        obj.name = 'Iniciando...'
        obj.image = 'images/loading.gif'
        obj.action = () => {}
      } else {
        obj.name = 'Iniciar sesión'
        obj.image = 'images/logo32.png'
        obj.action = () => Uactions.LogIn()
      }
    }
    if (fromStore.googleStatus) {
      obj.name = fromStore.googleStatus.desc
    }
    return obj
  }
  render () {
    return (<DropdownItem>
      <Boton key={this.state.status} image={this.state.image} span={this.state.name} click={this.state.action} />
    </DropdownItem>
  )
  }

}
