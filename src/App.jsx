
// import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { Route, Routes } from 'react-router'
import './App.css'
import BudgetApp from './components/budget'
import Home from './page/home'
import SignUp from './components/form/sign up'
import Signin from './components/form/sign in'
// import WelcomeScreen from './page/home'
// import { ContextProvider } from './config/context';
// import Layout from 'antd/es/layout/layout';
// import Budgetapp from './components/budget';
// import SignUp from './components/form/sign up';
// import { MainLayout } from './layout';





function App() {
//  const { user } = ContextProvider();
//    const { pathname } = useLocation();
//      const navigate = useNavigate();

//   useEffect(() => {
//     if (!user && pathname !== "/") {
//       navigate("/");
//     }
//     if (user && pathname === "/") {
//       navigate("/budget");
//     }
//   }, [pathname, user]);


  return (
    <>
   <Routes>
      <Route path="/" index element={<SignUp />} />
       <Route path="/signin" index element={<Signin />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/home" index element={<BudgetApp />} />
    </Routes>
 
    </>
  )
}

export default App
