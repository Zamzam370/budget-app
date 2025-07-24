
// import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { Route, Router, Routes } from 'react-router'
import './App.css'

import Home from './page/home'
import SignUp from './components/form/sign up'
import Signin from './components/form/sign in'
import BudgetApp from './page/budget'
import { History } from './page/history'







function App() {



  return (
    <>
   <Routes>
      <Route path="/" index element={<SignUp />} />
       <Route path="/signin" index element={<Signin />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/budget" index element={<BudgetApp/>} />
        <Route path="/history" index element={<History />  } />
    </Routes>

{/* <BudgetApp/> */}

    </>
  )
}

export default App
