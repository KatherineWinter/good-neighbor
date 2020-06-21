import React from 'react'
import { Stamp } from './index'
export default {
  title: 'Stamp',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
}

export const defaults = () => <Stamp />

export const userFinish = () => (
  <Stamp date={new Date('2015-12-13T23:28:56.782Z')} />
)

export const isActive = () => <Stamp isActive={true} />

export const allProps = () => (
  <Stamp date={new Date('2015-12-13T23:28:56.782Z')} isActive={true} />
)
