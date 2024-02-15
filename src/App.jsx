import React from 'react'
import Header from './Components/Util/Header.jsx'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div><Header>
      </Header>
      <Outlet/>  
      {/* to make the child route rendered */}
      </div>
  )
  
}

export default App