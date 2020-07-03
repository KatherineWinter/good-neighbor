import React, { Component } from 'react'
import firebaseApp from '@firebase/app'
import '@firebase/auth'
import { Points } from '../points'
import { getCardsTemplate } from '../../utils/get-cards-template'
import './index.scss'

export class Landing extends Component {
  signIn(e) {
    e.preventDefault()
    const provider = new firebaseApp.auth.GoogleAuthProvider()
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(this.props.handleUserSignedIn)
      .catch(console.error)
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
              {'Sign in with Google'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
