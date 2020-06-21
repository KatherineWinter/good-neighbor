import React from 'react'
import './index.scss'

function handleClick() {
  this.props.handleClick && this.props.handleClick()
}

export class Points extends React.Component {
  render() {
    return (
      <div className="points">
        <img alt="points" src="/points.png" onClick={handleClick.bind(this)} />
        <label onClick={handleClick.bind(this)}>{this.props.text || 0}</label>
        {this.props.menu}
      </div>
    )
  }
}
