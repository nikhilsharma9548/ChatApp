import React, { useContext, useState } from 'react'
import { FiSidebar } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoMicSharp } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaMailchimp } from "react-icons/fa6";
import { Context } from '../Context/Context';
import SideBar from './SideBar';
import { div } from 'framer-motion/client';

const Main = () => {

    const{onSent,resultData,showResult,setInput,input,loading,extended, setExtented,setRecentPrompt,recentPrompt}= useContext(Context)

     const toggleSilder = () =>{
      setExtented(!extended);
    }

  return (

    <>        
        
        <div className='w-full flex flex-col justify-between bg-gradient-to-r  from-[#1E1E1E] to-[#121212]  text-white'
        >
            
            <div className="md:px-10 px-3 py-5 text-2xl flex items-center  justify-between">
                
                <p className='flex items-center gap-3 max-sm:text-xl'>
                  <FiSidebar className='md:hidden text-2xl' onClick={toggleSilder}/>
                  ChatBot</p>
                <p className='p-2 text-sm md:text-lg pt-1.5 border rounded-full'><FaRegUser /></p>
            </div>
             <div className='flex-1 overflow-y-auto max-h-[calc(100vh-30vh)] hide-scrollbar'>
                {! showResult ? (
                    <div className='flex flex-col text-4xl sm:text-6xl p-5 sm:p-24'>
                        <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>hello, there</span></p>
                        <p>How can I help you Today?</p>
                    </div>
                ):
                <div className='md:px-32 flex-col px-5 py-10 flex gap-7'>
                        <div className='flex md:pr-20 gap-3 justify-end '>  
                            <p className='bg-gray-700/30 rounded px-3 py-1.5'>{recentPrompt}</p>
                            <p className=' p-2.5 text-base'><FaRegUser /></p>
                        </div>
                                     {loading ?(
                        <div className='h-3 w-3 flex gap-3 pt-1.5'>        
                               <p className='p-1.5 bg-white animate-pulse rounded-full'></p>
                               <p className='p-1.5 bg-white animate-pulse rounded-full'></p>
                               <p className='p-1.5 bg-white animate-pulse rounded-full'></p>
                        </div>
                    ):(
                    <div className='flex gap-3 '>
                         <p className=' md:text-2xl text-xl'><FaMailchimp /></p>
                        <p dangerouslySetInnerHTML={{ __html: resultData || "No data" }}
                        ></p>
                    </div>
                    )}
                </div>
                }
            </div>

            {/* bottom field  */}

            <div className='w-full flex  flex-col pb-12 items-center'>
                <div className='md:text-xl text-lg flex w-[90%] md:max-w-[60%] mx-auto sticky  bg-gray-500/50  rounded-full'>
                    <input type="text"
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') onSent();
                     }}
                    onChange={(e) =>setInput(e.target.value)}
                    placeholder='Ask anythink.....'
                    className='bg-transparent  border-none p-3 outline-none w-full' />
                    <p  className='flex justify-center items-center pr-4 cursor-pointer'><MdPhotoSizeSelectActual /></p>
                     <p className='flex justify-center items-center pr-4 cursor-pointer'><IoMicSharp /></p>
                      <p onClick={() =>{
                        if(input.trim() !== ""){
                            onSent();
                        }}} 
                        className='flex justify-center items-center pr-5 cursor-pointer'><IoSendSharp /></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main