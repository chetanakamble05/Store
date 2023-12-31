import React from 'react'
import { Route, Routes,} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <>
    <div>
      <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
