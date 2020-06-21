import React from 'react'
import './index.scss'

export class Ribbon extends React.Component {
  render() {
    return (
      <div className="banner" onClick={this.props.handleClick}>
        {this.props.text}
      </div>
    )
  }
}
