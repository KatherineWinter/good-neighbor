import React, { Component } from 'react'
import firebaseApp from '@firebase/app'
import '@firebase/auth'
import { Points } from '../points'
import { getCardsTemplate } from '../../utils/get-cards-template'
import './index.scss'

export class Landing extends Component {
  googleSignIn(e) {
    e.preventDefault()
    const provider = new firebaseApp.auth.GoogleAuthProvider()
    firebaseApp.auth().signInWithPopup(provider).catch(console.error)
  }

  facebookSignIn(e) {
    e.preventDefault()
    const provider = new firebaseApp.auth.FacebookAuthProvider()
    provider.addScope('email')
    firebaseApp.auth().signInWithPopup(provider).catch(console.error)
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
            <button className="google" onClick={this.googleSignIn.bind(this)}>
              <img alt="google logo" src="/g-logo.png" />
              {'Continue with Google'}
            </button>
            <button
              className="facebook"
              onClick={this.facebookSignIn.bind(this)}
            >
              <img alt="facebook logo" src="/f-logo.png" />
              {'Continue with Facebook'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
