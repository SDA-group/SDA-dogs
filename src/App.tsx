import React from 'react';
import DataAPI from './components/DataAPI/DataAPI';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <DataAPI></DataAPI>
    </div>
  );
}

export default App;
