import React from 'react'
import LtkdUseState from './components/LtkdUseState'
import LtkdListStudent from './components/LtkdListStudent'

export default function LtkdApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Lê Trần Khánh Duy]</h1>
        <hr/>

        <LtkdUseState />

        <LtkdListStudent />
    </div>
  )
}