import React from "react";
import tororo from './img/totoro.svg';
import './TororoContainer.css'

export default function TororoContainer({text, classNames, title}) {
  
  return(
    <div className={classNames + ' d-flex flex-column align-items-center totoro-container'}>
      <div>
        <img src={tororo}/>
      </div>
      <div className='shadow-sm bg-white totoro-text'>
        <h4 style={{fontSize: 28, color: '#CB752A', textAlign:'center'}}>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}