import React, { useState } from "react";
import CerealElement from "./CerealElement";
import { ChevronLeft, ChevronRight } from "react-feather";
import "./Shelf.css";

export default function CerealRow ({data}) {  
  const [displayIndex, setDispalyIndex] = useState(0);

  function handlePrevious() {
    setDispalyIndex(displayIndex - 6);
  }

  function handleNext() {
    setDispalyIndex(displayIndex + 6);
  }

  return (
    <div className="row">
      <button className="align-self-center" disabled={displayIndex <= 0} onClick={() => {handlePrevious()}}>
        <ChevronLeft color="grey" size={24} />
      </button>
      {data.slice(displayIndex, displayIndex + 6) && data.slice(displayIndex, displayIndex + 6).map((item) => (
        <CerealElement data={item} key={item.img}></CerealElement>
      ))}
      <button className="align-self-center" disabled={displayIndex + 6 >= data.length} onClick={() => {handleNext()}}>
        <ChevronRight color="grey" size={24} />
      </button>
    </div>);
};

