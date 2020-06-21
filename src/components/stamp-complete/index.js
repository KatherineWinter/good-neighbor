import React, { Component } from 'react'
import './index.scss'
import { TextBowed } from '../text-bowed'
import { dateString } from '../../utils/date-string'
import { randomTransform } from '../../utils/random-transform'
import { themes } from '../../merit'

export class StampComplete extends Component {
  render() {
    const { date, theme } = this.props
    const dateStr = dateString(date)
    return (
      <div
        className="stamp-complete"
        style={{ transform: randomTransform(date.toString()) }}
      >
        <TextBowed text={dateStr} />
        <img
          alt="completed"
          src={theme?.stampImage || themes.generalBlue.stampImage}
        />
      </div>
    )
  }
}
