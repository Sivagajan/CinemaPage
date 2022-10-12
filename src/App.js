import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './App.css';
import Owner from './pages/Owner';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/owner' element={<Owner/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
