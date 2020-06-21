import { v4 as uuidv4 } from 'uuid'
import React, { Component } from 'react'
import './index.scss'

function listItemTemplate(item) {
  return (
    <li key={uuidv4()} onClick={item.callback}>
      {item.title}
    </li>
  )
}

export class Menu extends Component {
  render() {
    const listItems = this.props.list.map(listItemTemplate)
    return <ul className="menu">{listItems}</ul>
  }
}
