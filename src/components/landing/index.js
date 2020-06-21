import { v4 as uuidv4 } from 'uuid'
import React, { Component } from 'react'
import { UserSession } from 'blockstack'
import { appConfig } from '../../constants'
import { Card } from '../card'
import { Points } from '../points'
import { merits, userData } from '../../merit'
import './index.scss'
import '../../App.css'

function cardsTemplate() {
  const cards = merits.map((merit) => (
    <Card key={uuidv4()} merit={merit} userData={userData} />
  ))

  return <div className="cards">{cards}</div>
}

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
          {cardsTemplate.call(this)}
        </div>
        <div className="hello">
          <div className="hello-content">
            <h1>Good Neighbor Miles</h1>
            <button onClick={this.signIn.bind(this)}>
              {'Sign in with Blockstack'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
