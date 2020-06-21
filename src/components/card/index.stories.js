import React from 'react'
import { Card } from './index'
import { merits, userData } from '../../merit'

export default { title: 'Card' }

export const defaults = () => <Card />

export const inactive = () => <Card merit={merits[0]} userData={userData} />

export const active = () => (
  <Card isActive={true} merit={merits[0]} userData={userData} />
)
