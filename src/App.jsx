import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'
function App() {
const [tk,setTk] = useState(63700);
  return (
    <>
      <Navbar tk={tk}></Navbar>
      <Banner></Banner>
      <Players tk={tk} setTk={setTk}></Players>
    </>
  )
}

export default App