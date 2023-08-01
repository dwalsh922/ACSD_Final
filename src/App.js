import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from "./Views/Shop/Shop"
import Cart from "./Views/Cart/Cart"
import Navbar from './Components/Navbar/Navbar.jsx'
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path = "/ASCD_Final/" element = {<Shop/>}/>
            <Route path = "/ASCD_Final/cart" element = {<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
