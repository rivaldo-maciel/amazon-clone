import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import PrevCart from './pages/PrevCart';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Address from './pages/Address';
import PaymentMethod from './pages/PaymentMethod';
import ConfirmRequest from './pages/ConfirmRequest';
import FinishPayment from './pages/FinishPayment';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/prevcart" component={PrevCart} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/address" component={Address} />
        <Route path="/payment-method" component={PaymentMethod} />
        <Route path="/confirm-request" component={ConfirmRequest} />
        <Route path="/finish-payment" component={FinishPayment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
