import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makrodownTextEdit, makrodownWrite, selectCurrent, selectHelpButton } from '../../Redux/makroSlice'
function Contents() {
  const current = useSelector(selectCurrent)
  const isShowingHelp = useSelector(selectHelpButton)
  const dispacth = useDispatch()

  useEffect(() => {
    dispacth(makrodownTextEdit())
  }, [dispacth, current])
  return (
    <div className='text-panels'>
      <textarea
        className='text-panel-left'
        onChange={(e) => dispacth(makrodownWrite(e.target.value))}
        value={current}
        readOnly={isShowingHelp}
      >
      </textarea>
      <div className='text-panel-right'
        id='textPanelLeft'>

      </div>
    </div>
  )
}

export default Contents
