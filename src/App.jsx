import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Ex1 from './components/ex1'
import Ex2 from './components/ex2'
import Ex3 from './components/ex3'
import Ex4 from './components/ex4'
import Ex5 from './components/ex5'
import Ex6 from './components/ex6'
import Ex7 from './components/ex7reducer'
import Ex8 from './components/ex8'
import Ex9 from './components/ex9'
import Ex10 from './components/ex10'

function App() {
  return (
  <div>
     <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/Ex1' element={<Ex1/>}/>
      <Route path='/Ex2' element={<Ex2/>}/>
      <Route path='/Ex3' element={<Ex3/>}/>
      <Route path='/Ex4' element={<Ex4/>}/>
      <Route path='/Ex5' element={<Ex5/>}/>
      <Route path='/Ex6' element={<Ex6/>}/>
      <Route path='/Ex7' element={<Ex7/>}/>
      <Route path='/Ex8' element={<Ex8/>}/>
      <Route path='/Ex9' element={<Ex9/>}/>
      <Route path='/Ex10' element={<Ex10/>}/>



    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App