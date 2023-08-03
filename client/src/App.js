import './App.css';
import React, {useContext} from 'react';
import {createBrowserRouter, RouterProvider, Navigate, Outlet} from "react-router-dom";
import Shop from "./Views/Shop/Shop"
import Cart from "./Views/Cart/Cart"
import Navbar from './Components/Navbar/Navbar.jsx'
import { ShopContextProvider } from './context/shop-context';
import { AuthContext } from './context/authContext';
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';


function App() {

  const {currentUser} = useContext(AuthContext);



  const Layout = ()=>{
      return(

        <div>
          <Navbar/>
          <div style={{display:"flex"}}>
           <Outlet/>
          </div>
        </div>
      )
  }
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to = '/login'/>
    }
    return children;  

    
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:'/',
          element: <Shop/>
        }
      
      ]
      
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path: '/cart',
      element: <Cart/>
    }
  ]
);


  return (
    <div>
      <ShopContextProvider>
        <RouterProvider router={router}/>
      </ShopContextProvider>
    </div>

  );

}


export default App;

/*
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router basename='/ACSD_Final'>
          <Navbar/>
          <Routes>
            <Route path = "/" element = {<Shop/>}/>
            <Route path = "/cart" element = {<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
*/