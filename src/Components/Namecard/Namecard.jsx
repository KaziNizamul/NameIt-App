import React from 'react'
import './Namecard.css'

const Namecard = (props) => {
  return (
    <div className="resultNameCard">
      <p className="result-name">{props.suggestedName}</p>
    </div>
  );
}

export default Namecard;