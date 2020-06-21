import React, { Component } from 'react'
import './index.scss'

export class DialogComplete extends Component {
  render() {
    return (
      <div className="dialog-complete">
        <div className="dialog">
          <h1>You got Good Neighbor Miles!</h1>
          <button onClick={this.props.handleButtonClick}>
            <img alt="completed" src="/complete-button.png" />
            {this.props.score || 0}
          </button>
          <img alt="completed" src="/progress2.jpg" />
        </div>
      </div>
    )
  }
}
