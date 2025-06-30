import React from 'react'
import './index.css';
import SideBar from './Components/SideBar/SIdeBar'
import Main from './Components/Main/Main'

const App = () => {
  return (
    <>
      <div className='overflow-hidden flex min-w-full h-screen'>
        <SideBar />
      <Main />
      </div>
    </>
  )
}

export default App