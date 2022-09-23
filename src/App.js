import './App.css';
import React, {useState, useEffect} from 'react';
import 'styled-components';
import DataTable from 'react-data-table-component';
import './style.scss';

const App = () => {

  //configuracon de hooks
  const [result, setResult] = useState( [] )

  //Funcion para mostrar datos

  const URL = 'https://api2.binance.com/api/v3/ticker/24hr'
  const showData = async () => {
    const response = await fetch(URL) 
    const data     = await response.json()
    console.log(data)
    setResult(data)
  }

  useEffect ( () => {
    showData()
  }, [])
  //Configuracion de las columnas

  const columns = [
    {
      name: 'Symbol',
      selector: row => row.symbol
    },
    {
      name: 'priceChange',
      selector: row => row.priceChange
    },
    {
      name: 'price Change Percent',
      selector: row => row.priceChangePercent
    },
    {
      name: 'openPrice',
      selector: row => row.openPrice
    },
    {
      name: 'high Price',
      selector: row => row.highPrice
    },
    {
      name: 'low Price',
      selector: row => row.lowPrice
    },
    
  ]  

  //Mostrar los datos en la tabla
  return (
  <div className='App'>
    <div className='row'>
    <DataTable
    title="Prueba ASTECI" 
    columns={columns}
    data={result}
    striped
    pagination
    />
    </div>
   </div>
  );
}

export default App;
