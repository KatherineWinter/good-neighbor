import { v4 as uuidv4 } from 'uuid'
import React, { Component } from 'react'
import './index.scss'

function letterTemplate(char, index) {
  return (
    <div className={`char${index}`} key={uuidv4()}>
      {char}
    </div>
  )
}

export class TextBowed extends Component {
  render() {
    return (
      <div className="text-bowed">
        {this.props.text.split('').map(letterTemplate)}
      </div>
    )
  }
}
