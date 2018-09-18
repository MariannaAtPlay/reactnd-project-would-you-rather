import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav>
        <NavLink to='/' exact activeClassName='active'>
            Home
        </NavLink> | 
        <NavLink to='/add' activeClassName='active'>
            New Question
        </NavLink> | 
        <NavLink to='/leaderboard' activeClassName='active'>
          Leaderboard
        </NavLink>
    </nav>
  )
}