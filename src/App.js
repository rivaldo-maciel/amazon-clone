import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => {}} />
        <Route path="/cart" component={() => {}} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
