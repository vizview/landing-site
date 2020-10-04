import React from "react";
import "./Shelf.css";

export default function CerealElement ({data}) {
    var img = data.img;
    img = img.replace("%", '');

  return (
    <div class="cereal-element">
      {data && <img src={require(`../Data/img/${img}.png`)} alt={data.name} />}
      <div>{data.category} : {data.value}</div>
    </div>);
};

