import React from 'react'
import Namecard from '../Namecard/Namecard'
import './Results.css'

const ResultContainer = (props) => {

  const names = props.suggestedNames.map(elem => {
    return <Namecard
      suggestedName={elem}
      key={elem}
    />
  })

  return (
    <div className='results-container'>
      { names }
    </div>
  )
}

export default ResultContainer;