import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
  return (
   <>
    <Sidebar/>
    {/* Main component ko mount kiya */}
    <Main/> 
       </>
  )
}

export default App