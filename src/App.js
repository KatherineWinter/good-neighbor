import React from 'react'
import { Card } from './components/card'
import { Points } from './components/points'
import { Menu } from './components/menu'
import { DialogComplete } from './components/dialog-complete'
import './App.css'
import { merits } from './merit'
import { UserSession } from 'blockstack'
import { Landing } from './components/landing'
import { ME_FILENAME } from './constants'
import { getUserScore } from './utils/get-user-score'

function cardsTemplate() {
  const cards = merits.map((merit) => {
    if (this.state.activeId && this.state.activeId !== merit.id) {
      return null
    }

    return (
      <Card
        key={merit.id}
        merit={merit}
        userData={this.state.userData}
        isActive={!!this.state.activeId}
        handleCardClick={() => this.setState({ activeId: merit.id })}
        handleSaveCompletion={handleSaveCompletion.bind(this)}
      />
    )
  })

  return <div className="cards">{cards}</div>
}

function closeTemplate() {
  let closeButton = null
  if (this.state.activeId) {
    closeButton = (
      <img
        alt="close"
        className="close"
        src={'/close.png'}
        onClick={() => this.setState({ activeId: null })}
      />
    )
  }

  return closeButton
}

function handlePointsClick() {
  this.setState({ isMenuVisible: !this.state.isMenuVisible })
}

function pointsTemplate() {
  return (
    <Points
      text={getUserScore(merits, this.state.userData)}
      menu={this.state.isMenuVisible ? <Menu list={this.menuList} /> : null}
      handleClick={handlePointsClick.bind(this)}
    ></Points>
  )
}

function closeDialogComplete() {
  this.setState({ showCompleteDialog: false })
}

function handleSaveCompletion(id, score) {
  this.score = score
  let userData = this.state.userData || []
  userData.push({
    id,
    completionDate: Date.now(),
  })

  handleSaveUserData.call(this, userData)
}

function handleSaveUserData(userData) {
  this.setState({ userData })
  this.userSession
    .putFile(ME_FILENAME, JSON.stringify(userData), { encrypt: false })
    .finally(() => {
      this.setState({ showCompleteDialog: true })
    })
}

function loadUserData() {
  this.userSession
    .getFile(ME_FILENAME, { decrypt: false })
    .then((content) => {
      if (content) {
        const userData = JSON.parse(content)
        this.setState({ userData })
      } else {
        const userData = null
        this.setState({ userData })
      }
    })
    .catch(() => {
      console.error('user data not found')
    })
}

function signOut(e) {
  e.preventDefault()
  this.userSession.signUserOut()
  window.location = '/'
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.userSession = new UserSession()
    this.score = 0
    this.state = {
      template: 'cards',
      userData: null,
      isMenuVisible: false,
    }

    this.menuList = [
      {
        title: 'About',
        callback: () => window.open('/about.md'),
      },
      {
        title: 'Sign out',
        callback: signOut.bind(this),
      },
    ]
  }

  componentDidMount() {
    const session = this.userSession
    if (!session.isUserSignedIn() && session.isSignInPending()) {
      session.handlePendingSignIn().then((userData) => {
        loadUserData.call(this)
      })
    } else {
      loadUserData.call(this)
    }
  }

  render() {
    if (this.userSession.isUserSignedIn()) {
      const dialogComplete = this.state.showCompleteDialog ? (
        <DialogComplete
          score={this.score}
          handleButtonClick={closeDialogComplete.bind(this)}
        />
      ) : null

      return (
        <div className="App">
          <div className="border" />
          {closeTemplate.call(this)}
          {pointsTemplate.call(this)}
          {cardsTemplate.call(this)}
          {dialogComplete}
        </div>
      )
    }

    return <Landing />
  }
}
