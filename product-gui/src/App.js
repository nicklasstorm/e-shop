import React, { Component } from 'react';
import './App.css';
import ProductsContainer from './components/ProductsContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Product GUI</h1>
         </header>
         <ProductsContainer />
      </div>
    );
  }
}

export default App;
