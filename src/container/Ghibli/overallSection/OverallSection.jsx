import React, {useEffect, useState} from "react";
import ColorBar from "../ColorBars/OriginColorBar";
import TororoContainer from "../TororoContainer";

export default function OverallSection({scrollPosition}) {
  

  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    {
      title: "Step 1",
      text: "First, we collected all the colors from the posters using Google Vision API and organized them by hue.",
     
    },
    {
      title: "Step 2",
      text: "Next, we removed lightness and satruation from the colors with only hue left.",
     
    },
  ];



  return (
    <>
      <section>
        <TororoContainer
          classNames="w-25"
          text={steps[currentStep].text}
          title={steps[currentStep].title}
        />
        <ColorBar dataType="ghibli" type="origin" />

        {/* <ColorBar dataType='ghibli' type='hue' />
        <ColorBar dataType='ghibli' type='classify' height='500'/>
        <TororoContainer classNames='w-25' text={'hello world'}/> */}
      </section>
      {/* <section>
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
      </section> */}
    </>
  );
}
