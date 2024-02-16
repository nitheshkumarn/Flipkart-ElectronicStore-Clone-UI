import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Components/Public/Register.jsx'
import Login from './Components/Public/Login.jsx'
import VerifyOTP from './Components/Public/VerifyOTP.jsx'
import Search from './Components/Public/Search.jsx'
import Home from './Components/Public/Home.jsx'
import navs from './Components/Routes/Navigations.jsx'




const user = {
  username : "nitheshkn",
  role : "",
  isAuthenticated : false
}

// const user = null;

// const publicRoutes = (
//     <React.Fragment>
//     <Route path="/register" element={<Register />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/verify-otp" element={<VerifyOTP />} />
//     <Route path="/search" element={<Search />} />
//     <Route path="/home" element={<Home />} />
//     </React.Fragment>
// );


const allRoutes = () => {
  return(
  <Route path={"/"} element={<App/>}>
 {/* {user === null ? publicRoutes : null} */}
 { navs.map((nav,i) => {
    if(user.isAuthenticated) {
      if(nav.isVisibleAfterAuth){
      if(nav.role === user.role || nav.role=== "ALL"){
        console.log(nav);
        return <Route key={i} path={nav.path} element={nav.element}/>
      }
    }
    }else{
      if(!nav.requiredAuth && nav.role === "ALL"){
        console.log(nav);
        return <Route key={i} path={nav.path} element={nav.element}/>
      }
    }
  }
  )
 }
 
</Route>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    {allRoutes()}
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
