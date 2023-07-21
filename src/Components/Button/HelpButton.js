import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectHelpButton, showHelp } from '../../Redux/makroSlice'

function HelpButton() {
  const helpbtn = useSelector(selectHelpButton)
  const dispacth = useDispatch()
  return (
    <div className={`help-button ${helpbtn && 'active'}`}
      onClick={() => dispacth(showHelp())}
    >
      <i className="fa fa-question" aria-hidden="true">?</i>
    </div>
  )
}

export default HelpButton
