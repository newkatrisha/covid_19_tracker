import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components'; //this works vecause we have index.js file in components folder 

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
