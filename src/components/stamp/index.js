import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import './index.scss'
import { Flag } from '../flag'
import { StampComplete } from '../stamp-complete'

export class Stamp extends React.Component {
  render() {
    const { date, theme, isActive, handleStampClick } = this.props

    let content = null
    if (date) {
      content = <StampComplete date={date} theme={theme} />
    } else if (isActive) {
      content = <Flag />
    }

    return (
      <li key={uuidv4()} onClick={handleStampClick} className={'stamp'}>
        {content}
      </li>
    )
  }
}
