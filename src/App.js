import './App.css';
import Counter from './Components/counter/counter';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import CartIcon from './Components/cartIcon/cartIcon';
import Cart from './Components/cart/cart';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Product from './Components/Product';
import Shop from './Components/shop/shop';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
  <Routes>

       <Route exact path="/"  element={<>        <CartIcon/>
<Shop/>
</>
}/>
       <Route path="/counter"  element={<Counter/>}/>
       <Route path="/cart"  element={<Cart/>}/>
       <Route path = "/shop/:id" element={<>        <CartIcon/>
   <Product/></>


}/>


  </Routes>
  </BrowserRouter>
    </Provider>
  );
}





export default App;
