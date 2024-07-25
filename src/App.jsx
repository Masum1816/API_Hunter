import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddData from './Components/AddData/AddData';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import UpdateData from './Components/UpdateData/UpdateData';
import TableData from './Components/Table/Table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/AddData' element={<AddData/>} />
      <Route path='/UpdateData/:id' element={<UpdateData/>} />
      <Route path='/TableData' element={<TableData/>} />
    </Routes>
    </>
  )
}

export default App
