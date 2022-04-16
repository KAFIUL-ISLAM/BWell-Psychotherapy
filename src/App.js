import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Homepage/Home/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<h1 className='text-4xl'>404 Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
