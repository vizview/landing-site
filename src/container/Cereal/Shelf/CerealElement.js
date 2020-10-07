import React from "react";
import "./Shelf.css";

export default function CerealElement ({data, category}) {
    var img = data.img;
    img = img.replace("%", '');

  return (
    <div className="cereal-element">
      {data && <img src={require(`../Data/img/${img}.png`)} alt={data.name} />}
      <div>{category} : {data[category]}</div>
    </div>);
};

