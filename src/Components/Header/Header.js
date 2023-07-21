import React from 'react'
import HelpButton from '../Button/HelpButton'

function Header() {
  return (
    <header>
      <h1 className='app-title'>Markdown Previewer</h1>
      <HelpButton/>
    </header>
  )
}

export default Header
