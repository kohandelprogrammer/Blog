import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopBar from './components/TopBar'
import Home from './components/Home'
import Single from './components/Single'
import Write from './components/Write'
import Login from './components/Login'
import Setting from './components/Setting'

function App() {

  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/single' element={<Single />}></Route>
          <Route path='/write' element={<Write />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/setting' element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
