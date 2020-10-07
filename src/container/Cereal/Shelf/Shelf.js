import React, {useState, useEffect} from "react";
import CerealRow from "./CerealRow";
import getData from '../Data/DataController';
import "./Shelf.css";

const defaultConfig = {
  high: 10,
  low: 5, 
}

const defautlCategories = ['calories', 'fiber', 'mfr', 'protein', 'sugars'];


export default function Shelf () {
  const [data, setData] = useState({});
  const [category, setCategory] = useState('sugars');
  const [sortBy, setSortBy] = useState('fiber');
  const [order, setOrder] = useState('DES');
  const [config, setConfig] = useState();
  const [filteredData, setFilteredData] = useState();
 
  useEffect(() => {
    getData((result) => updateData(result));
  }, []);

  function updateData(result) {

    var categoriesData = {
      high: [],
      med: [],
      low: []
    }

    if (result.data) {

      let curConfig = calculateConfig(result.data, category);

      setData(result.data);

      result.data.forEach(element => {
        if (element[category] < curConfig.low) {
          categoriesData.low.push(element);
        } else if (element[category] > curConfig.high) {
          categoriesData.high.push(element);
        } else {
          categoriesData.med.push(element);
        }
      });

      for (var level in categoriesData ) {
        if (order == "DES") {
          categoriesData[level].sort((a, b) => (b[sortBy] - a[sortBy]));
        } else {
          categoriesData[level].sort((a, b) => (a[sortBy]) - b[sortBy]);
        }
      }
      
      setFilteredData(categoriesData);
    }
  };

  function calculateConfig(data, curCategory) {
    let max;
    let high;
    let low;
    if (curCategory == "mfr") { 
      const reducer = (acc, {mfr}) => { return (acc[mfr] = (acc[mfr] || 0 ) + 1, acc)};
      const result = data.reduce(reducer, {});
      let keysSorted = Object.keys(result).sort(function(a,b){return result[b]-result[a]})
      max = keysSorted[0];
      high = keysSorted[1];
      low = keysSorted[2];
    } else {
      max = Math.max.apply(Math, data.map(function(el) { return el[curCategory]}));
      low = Math.round(max / 3);
      high = Math.round(max / 3 * 2);    
    }
    setConfig({max, high, low});
    return {max, high, low};
  }

  function handleCategoryChange(e) {
    let curCategory = e.target.value;

    let curConfig = calculateConfig(data, curCategory);

    var categoriesData = {
      high: [],
      med: [],
      low: []
    }

    if (curCategory == 'mfr') {
      data.forEach(element => {
        if (element[curCategory] == curConfig.low) {
          categoriesData.low.push(element);
        } else if (element[curCategory] == curConfig.max) {
          categoriesData.high.push(element);
        } else if (element[curCategory] == curConfig.high) {
          categoriesData.med.push(element);
        }
      });
    } else {
      data.forEach(element => {
        if (element[curCategory] < curConfig.low) {
          categoriesData.low.push(element);
        } else if (element[curCategory] > curConfig.high) {
          categoriesData.high.push(element);
        } else {
          categoriesData.med.push(element);
        }
     });
    }
    
    sortData(categoriesData, sortBy, order);
    setCategory(e.target.value);
    setFilteredData(categoriesData);
  }

  function handleSortChange(e) {
    sortData(filteredData, e.target.value, order);

    setSortBy(e.target.value)
    setFilteredData(filteredData);
  }

  function handleOrderChange(e) {
    for (var level in filteredData ) {
      if (e.target.value == "DES") {
        filteredData[level].sort((a, b) => (b[sortBy] - a[sortBy]));
      } else {
        filteredData[level].sort((a, b) => (a[sortBy]) - b[sortBy]);
      }
    }    
    setOrder(e.target.value)
    setFilteredData(filteredData);
  }

  function renderCategorySelect() {
    return (  
      <div class="input-group mb-1 w-25">
          {filteredData && <select onChange={(e) => handleCategoryChange(e)} value={category}>
              {defautlCategories.map((item) => {
                let itemName = item;
                if (item == 'mfr') {
                  itemName = 'manifacture';
                } 
                return (<option key={item} value={item}>{itemName}</option>)
              })}
          </select>}
        </div>);
  }

  function renderSortbySelect() {
    return (
      <div class="input-group mb-1 w-25">
        {filteredData && <select onChange={(e) => handleSortChange(e)} value={sortBy}>
            {defautlCategories.map((item) => {
              let itemName = item;
              if (item != 'mfr') {
                return (<option key={item} value={item}>{itemName}</option>)
              }
            })}
        </select>}
      </div>);
  }

  function renderOrderSelect() {
    return (
      <div class="input-group mb-1 w-25">
        {filteredData && <select onChange={(e) => handleOrderChange(e)} value={order}>
          <option value={'DES'}>High to Low</option>
          <option value={'ASC'}>Low to High</option>
        </select>}
      </div>
    );
  }

  function sortData(dataset, sortBy, order) {
    for (var level in dataset ) {
      if (order == "DES") {
        dataset[level].sort((a, b) => (b[sortBy] - a[sortBy]));
      } else {
        dataset[level].sort((a, b) => (a[sortBy]) - b[sortBy]);
      }
    } 
  }


  return (
    <div className="container">
      <h2>Shelf</h2>
      <div className="mb-5">Organize my creals into different levels by {renderCategorySelect()}, and sort each level by {renderSortbySelect()} , from {renderOrderSelect()}.</div>
      
  {config && (<div className="text-center">High {category} Level: {config.max}</div>)}
      {filteredData && filteredData.high && <CerealRow data={filteredData.high} category={sortBy} />} 
      {config && (<div className="text-center">Med {category} Level: {config.high}</div>)}
      {filteredData && filteredData.med && <CerealRow data={filteredData.med} category={sortBy}/>} 
      {config && (<div className="text-center">Low {category} Level: {config.low}</div>)}
      {filteredData && filteredData.low && <CerealRow data={filteredData.low} category={sortBy}/>} 
    </div>
  );
};
