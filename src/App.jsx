import React from 'react'
import { useContext } from 'react';
import { Context } from './Context/Context';
import './index.css';
import SideBar from './Components/SideBar'
import Main from './Components/Main';

const App = () => {
  return (
    <>
      <div className='overflow-hidden bg-black flex min-w-full md:h-[100dvh] h-[100dvh]'>
      <SideBar />
      <Main />
      </div>
    </>
  )
}

export default App