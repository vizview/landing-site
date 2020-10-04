import React from "react";
import CerealElement from "./CerealElement";
import "./Shelf.css";

export default function CerealRow ({data}) {  
  return (
    <div className="row">
      {data && data.map((item) => (
        item.name != "100%_natural_bran" && 
          <CerealElement data={item} key={item.name}></CerealElement>
      ))}
    </div>);
};

