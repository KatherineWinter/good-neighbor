import React, { Component } from 'react'
import { UserSession } from 'blockstack'
import { appConfig } from '../../constants'
import { Points } from '../points'
import { getCardsTemplate } from '../../utils/get-cards-template'
import './index.scss'

export class Landing extends Component {
  constructor() {
    super()
    this.userSession = new UserSession({ appConfig })
  }

  signIn(e) {
    e.preventDefault()
    this.userSession.redirectToSignIn()
  }

  render() {
    return (
      <div className="Landing">
        <div className="App">
          <div className="border" />
          <Points text={300}></Points>
          {getCardsTemplate()}
        </div>
        <div className="hello">
          <div className="hello-content">
            <h1>Good Neighbor</h1>
            <button onClick={this.signIn.bind(this)}>
              {'Sign in with Blockstack'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
