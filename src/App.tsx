import React from 'react';
import './App.css';
import ProductRow from './components/ProductRow/ProductRow';
import ProductTable from './components/ProductTable/ProductTable';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
//import ProductBrandSelection from './components/ProductBrandSelection/ProductBrandSelection';

function App() {
  return (
    <div className="App">
      <ProductRow />
      <ProductTable />
      <FilterableProductTable />
    </div>
  );
}

export default App;
