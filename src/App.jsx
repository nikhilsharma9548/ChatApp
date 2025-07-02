import React from 'react'
import './index.css';
// import SideBar from './Components/SideBar/Sidebar';
import SideBar from './Components/SideBar'
import Main from './Components/Main';
// import Main from './Components/Main/Main'

const App = () => {
  return (
    <>
      <div className='overflow-hidden bg-black flex min-w-full md:h-[100dvh] h-[100dvh]'>
        <SideBar />
        {/* <SideBar /> */}
      <Main />
      </div>
    </>
  )
}

export default App