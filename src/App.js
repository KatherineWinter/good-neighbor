import React from 'react'
import firebaseApp from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import { Border } from './components/border'
import { Points } from './components/points'
import { Menu } from './components/menu'
import { DialogComplete } from './components/dialog-complete'
import './App.css'
import { merits } from './merit'
import { Landing } from './components/landing'
import { getUserScore } from './utils/get-user-score'
import { getCardsTemplate } from './utils/get-cards-template'

function cardsTemplate() {
  const handleCardClick = (merit) => this.setState({ activeId: merit.id })
  return getCardsTemplate(
    this.state.activeId,
    this.state.userData,
    handleCardClick,
    handleSaveCompletion.bind(this)
  )
}

function dialogCompleteTempate() {
  if (this.state.userData && this.state.showCompleteDialog) {
    return (
      <DialogComplete
        score={this.score}
        handleButtonClick={closeDialogComplete.bind(this)}
      />
    )
  }

  return null
}

function landingTempate() {
  if (!this.state.userData && this.state.showLanding) {
    return <Landing></Landing>
  }
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
      menu={
        this.state.isMenuVisible ? <Menu list={menuList.call(this)} /> : null
      }
      handleClick={handlePointsClick.bind(this)}
    ></Points>
  )
}

function closeDialogComplete() {
  this.setState({ showCompleteDialog: false })
}

function handleSaveCompletion(id, score) {
  if (this.state.userData) {
    this.score = score
    this.setState({
      showCompleteDialog: true,
    })
    handleSaveUserData.call(this, id)
  } else {
    this.setState({
      showLanding: true,
    })
  }
}

function handleSaveUserData(id) {
  const db = firebaseApp.firestore()
  db.collection('posts').add({
    id,
    userEmail: this.userEmail,
    completionDate: Date.now(),
  })
}

function loadUserData(userEmail) {
  const db = firebaseApp.firestore()
  const meritsRef = db.collection('posts')
  this.userEmail = userEmail
  const query = meritsRef.where('userEmail', '==', this.userEmail)

  let userData = []
  query.onSnapshot((data) => {
    data.forEach((doc) => {
      userData.push(doc.data())
    })
    this.setState({
      userData,
      showLanding: false,
    })
  })
}

function signOut(e) {
  e.preventDefault()
  firebaseApp.auth().signOut()
}

function menuList() {
  let list = [
    {
      title: 'About',
      callback: () => window.open('/about.html'),
    },
  ]

  if (this.state.userData) {
    list.push({
      title: 'Sign out',
      callback: signOut.bind(this),
    })
  }

  return list
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.score = 0
    this.userEmail = null
    this.state = {
      template: 'cards',
      userData: null,
      isMenuVisible: false,
    }
  }

  componentDidMount() {
    firebaseApp.initializeApp({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_APP_ID,
    })

    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        loadUserData.call(this, user.email)
      } else {
        this.setState({ userData: null })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Border />
        {closeTemplate.call(this)}
        {pointsTemplate.call(this)}
        {cardsTemplate.call(this)}
        {dialogCompleteTempate.call(this)}
        {landingTempate.call(this)}
      </div>
    )
  }
}
