import React from "react";
import tororo from './img/totoro.svg';

export default function TororoContainer({text, classNames}) {
  return(
    <div className={classNames + ' d-flex flex-column align-items-center'}>
      <div>
        <img src={tororo}/>
      </div>
      <div className='p-5 shadow-sm bg-white'>{text}</div>
    </div>
  )
}