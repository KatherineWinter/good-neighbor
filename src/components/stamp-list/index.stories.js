import React from 'react'
import { StampList } from './index'
import { Stamp } from '../stamp'

export default { title: 'Stamp List' }

export const defaults = () => <StampList stamps={multipleStamps()}></StampList>

const multipleStamps = () => {
  return [
    {
      date: new Date('2015-12-13T23:28:56.782Z'),
      isActive: false,
    },
    {
      date: new Date('2015-12-13T23:28:56.782Z'),
      isActive: false,
    },
    {
      date: null,
      isActive: true,
    },
    {
      date: null,
      isActive: true,
    },
  ].map((stamp) => {
    return <Stamp date={stamp.date} isActive={stamp.isActive} />
  })
}
