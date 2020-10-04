import React, {useState, useEffect} from "react";
import CerealRow from "./CerealRow";
import Papa from 'papaparse';
import getData from '../Data/DataController';
import "./Shelf.css";

const config = {
  high: 10,
  low: 5, 
}

export default function Shelf () {
  const [data, setData] = useState({});

  useEffect(() => {
    getData((result) => updateData(result));
  }, [data]);

  function updateData(result) {
    var categoriesData = {
      high: [],
      med: [],
      low: []
    }
    let category = "sugars";

    if (result.data) {
      result.data.forEach(element => {
        let item = {img: element.img, category: category, value: element[category]};
        if (element[category] < config.low) {
          categoriesData.low.push(item);
        } else if (element[category] > config.high) {
          categoriesData.high.push(item);
        } else {
          categoriesData.med.push(item);
        }
      });

      setData(categoriesData);
    }
  };


  return (
    <div className="container">
      <h2>Shelf</h2>
      {data.high && <CerealRow data={data.high} />} 
      {data.med && <CerealRow data={data.med} />} 
      {data.low && <CerealRow data={data.low} />} 
    </div>
  );
};
