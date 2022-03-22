import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route  path="/products/:id" component={ProductDetails} />
        <Route  path="/cart" component={() => {}} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
