import React from 'react'
import { Menu } from './index'

export default { title: 'Menu' }

const menuList = [
  {
    title: 'Sign out',
  },
]

export const defaults = () => <Menu list={menuList} />
