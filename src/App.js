import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Homepage/Banner/Banner';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='*' element={<h1 className='fs-8'>404 Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
