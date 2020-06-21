import React, { Component } from 'react'
import './index.scss'

export class Flag extends Component {
  render() {
    return (
      <div className="contain-flag">
        <div className="pole" />
        <div className="flag" />
        <div className="shadow" />
        <div className="flag-2" />
      </div>
    )
  }
}
