import React, { useState } from "react";
import { Select } from "antd"
import "./Magnifier.css";
import Quadrant from '../Quadrant/Quadrant'


const { Option } = Select


const Magnifier = () => {
  const options1 = [
    'calories',
    'protein',
    'fiber',
    'sugars'
  ];

  const options2 = [
    'sugars',
    'calories',
    'protein',
    'fiber',
  ]



  const [selectedOption1, setSelectedOption1] = useState("calories")
  const [selectedOption2, setSelectedOption2] = useState("sugars")


  function handleOption1Change(value) {
    setSelectedOption1(value)

  }

  function handleOption2Change(value) {
    setSelectedOption2(value)
  }

  return (
    <section className="cereal-magnifier-section pt-5">
      <div>
        <h2 className="cereal-magnifier-h1">Cereal Picker</h2>
        <h3>
          <span>Compare creals based on </span>

          <Select defaultValue={selectedOption1} onChange={handleOption1Change} dropdownClassName="options">
            {options1.map(option => (
              <Option value={option} key={option} disabled={option === selectedOption2} style={{ backgroundColor: selectedOption1 === option ? "#ef9c8a" : "transparent", fontWeight: 300 }} >{option}</Option>
            ))}
          </Select>

          <span> and </span>
          <Select defaultValue={selectedOption2} onChange={handleOption2Change}>
            {options2.map(option => (
              <Option value={option} key={option} disabled={option === selectedOption1} style={{ backgroundColor: selectedOption2 === option ? "#ef9c8a" : "transparent", fontWeight: 300 }}>{option}</Option>
            ))}
          </Select>
        </h3>
        <div className="container">

          <Quadrant x={selectedOption1} y={selectedOption2} />

        </div>
      </div>
    </section>)
};

export default Magnifier;
