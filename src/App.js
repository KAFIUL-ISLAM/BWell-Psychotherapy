import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Homepage/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import AboutMe from './Components/AboutMe/AboutMe';
import Login from './Components/AuthenticationPage/Login/Login';
import Register from './Components/AuthenticationPage/Register/Register';
import Checkout from './Components/CheckoutPage/Checkout/Checkout';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:packageId' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<h1 className='text-4xl'>404 Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
