import React, { useContext, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FiSidebar } from "react-icons/fi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { Context } from '../Context/Context';


const SideBar = () => {

    
    const{onSent,prevPrompt,setRecentPrompt,newChat,extended,setExtented} = useContext(Context);

    const loadPrompt = async(prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    const toggleSilder = () =>{
      setExtented(!extended);
    }

  return (
    <> 
       <div className={` px-2 flex flex-col duration-500 justify-between text-white ${!extended ? "sm:border-r-2 md:w-16 w-px bg-[#1E1E1E]":" bg-[#131111] w-96"}`}>  
          <div className='max-md:hidden flex h-screen flex-col justify-between '>
             <p className={`text-2xl cursor-pointer border-b-2 md:py-6 py-6 ${!extended && "border-none"}`} onClick={toggleSilder}><FiSidebar /></p>   

              { extended ?
                <div className={`flex  flex-col gap-7 pt-14 `}>
                    <div className='flex flex-col  justify-center items-center'>
                        <div className='flex p-2 gap-2 justify-center  w-32 bg-gray-800  hover:bg-gray-700/80 duration-500 rounded-full items-center cursor-pointer'>
                            <p className='text-xl'><MdAdd /></p>
                            <p onClick={()=>{newChat()
                               }}>New Chat</p>
                        </div>
                      </div>
        
              <div>
                    <p className='text-xl pb-5 pl-2'>Recent</p>
                 <div className='flex flex-col gap-2 overflow-y-auto px-5 h-[22rem] hide-scrollbar'>  
                    {prevPrompt.map((item,index) =>{
                      return(
                        <div className="flex gap-2 cursor-pointer hover:bg-gray-700/80 duration-500 items-center p-2 rounded-full  bg-gray-800" 
                            key={index}
                            onClick={()=>loadPrompt(item)}>
                            <p><FaRegMessage /></p>
                            <p>{item.slice(0,18)}...</p>
                        </div>
                        )})}
                </div>
              </div>
        </div>:null
            } 
          {/* bottom */}

          <div className={`flex flex-col gap-3 border-t-2 pb-4 ${!extended ? " border-none items-center": " p-5"}`}>
              <div className="flex items-center   gap-3 cursor-pointer">
                    <p className='text-2xl'><HiOutlineQuestionMarkCircle /></p>
                    {extended ? <p className='text-xl'>help</p>:null}
              </div>

              <div className="flex items-center gap-3 cursor-pointer">
                    <p className='text-2xl'><IoIosTimer /></p>
                    {extended ? <p>Activity</p>:null}
              </div>

              <div className="flex items-center gap-3 cursor-pointer">
                  <p className='text-2xl'><IoMdSettings /></p>
                    {extended ? <p>Setting</p>:null}
              </div>            
          </div> 
    </div>

         {/* mobile view */}

         { extended &&(

          <div className='flex md:hidden h-screen flex-col justify-between '>
                <p className={`text-2xl cursor-pointer border-b-2 md:py-6 py-8 ${!extended && "border-none"}`} onClick={toggleSilder}></p>
                  { extended ?
         <div className={`flex flex-col gap-7 pt-14 `}>
             <div className='flex flex-col  justify-center items-center'>
                 <div className='flex p-2 gap-2 justify-center  w-32 bg-gray-800  hover:bg-gray-700/80 duration-500 rounded-full items-center cursor-pointer'>
                  <p className='text-xl'><MdAdd /></p>
                  <p onClick={()=>{newChat()
                  setExtented(false)
                  }}>New Chat</p>
                 </div>
              </div>
        
                 <div>
                    <p className='text-xl pb-5 pl-2'>Recent</p>
                 <div className='flex flex-col gap-2 overflow-y-auto h-[22rem] hide-scrollbar'>  
                  {prevPrompt.map((item,index) =>{
                    return(
                      <div className="flex gap-2 cursor-pointer hover:bg-gray-700/80 duration-500 items-center p-2 rounded-full  bg-gray-800" 
                          key={index}
                          onClick={()=>{
                            loadPrompt(item);
                            setExtented(false);
                          }}>
                          <p><FaRegMessage /></p>
                          <p>{item.slice(0,18)}...</p>
                      </div>
                    )
                })}
                </div>
                </div>
        </div>:null
         } 
          {/* bottom */}
          
          <div className={`flex flex-col gap-3 justify-center border-t-2 pb-8 ${!extended ? " border-none": "p-5"}`}>
            <div className="flex items-center   gap-3 cursor-pointer">
                  <p className='text-2xl'><HiOutlineQuestionMarkCircle /></p>
                  {extended ? <p className=''>help</p>:null}
            </div>

            <div className="flex items-center gap-3 cursor-pointer">
                  <p className='text-2xl'><IoIosTimer /></p>
                  {extended ? <p>Activity</p>:null}
            </div>

            <div className="flex items-center gap-3 cursor-pointer">
                 <p className='text-2xl'><IoMdSettings /></p>
                  {extended ? <p>Setting</p>:null}
            </div>            
          </div> 
    </div>
         )}

        </div>      
     </>
  )
}

export default SideBar