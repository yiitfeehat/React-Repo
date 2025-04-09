
import './App.scss';
import Header from './components/header/Header';
import ProductList from './components/products/ProductList';

import { categories, title } from "./helper/data"
function App() {
  return (
    <div className="App">
      <header className="App">
        <Header categories={categories} title="Products List" />
        <ProductList categories={categories}/>

      </header>
    </div>
  );
}

export default App;
