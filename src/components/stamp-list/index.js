import React, { Component } from 'react'
import './index.scss'

export class StampList extends Component {
  render() {
    return <ul className="stamps">{this.props.stamps}</ul>
  }
}
