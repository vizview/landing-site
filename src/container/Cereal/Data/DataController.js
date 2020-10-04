// import React, {useEffect, useState} from "react";
import Papa from 'papaparse';

export default function getData (dataModifier) {
  const csvData = require('../Data/cereals.csv');
  Papa.parse(csvData, {
    header: true,
    download: true,
    skipEmptyLines: true,
    complete: dataModifier
  })
};
