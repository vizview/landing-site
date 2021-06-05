import React from "react";
import ColorBar from '../ColorBars/OriginColorBar';
import TororoContainer from '../TororoContainer';

export default function OverallSection() {
  return(
    <>
      <section>
        <ColorBar dataType='ghibli' type='origin' />
        <ColorBar dataType='ghibli' type='hue' />
        <ColorBar dataType='ghibli' type='classify' height='500'/>
        <TororoContainer classNames='w-25' text={'hello world'}/>
      </section>
      <section>
        <div className='d-flex flex-row'>
          <ColorBar dataType='fantasy' type='origin'  width='300'/>
          <ColorBar dataType='drama' type='origin'  width='300' />
        </div>

        <div className='d-flex flex-row'>
          <ColorBar dataType='fantasy' type='hue' width='300' height='200'/>
          <ColorBar dataType='drama' type='hue' width='300' height='200'/>
        </div>

        <div className='d-flex flex-row'>
          <ColorBar dataType='fantasy' type='classify' width='300' height='200'/>
          <ColorBar dataType='drama' type='classify' width='300' height='200'/>
        </div>
      </section>
    </>
  )
}