import React from 'react'
import './index.css';
import SideBar from './Components/SideBar/Sidebar';
import Main from './Components/Main/Main'

const App = () => {
  return (
    <>
      <div className='overflow-y-hidden flex min-w-full min-h-screen'>
        <SideBar />
      <Main />
      </div>
    </>
  )
}

export default App