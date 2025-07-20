import React, { useContext, useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion';
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
import { FiSidebar } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoMicSharp } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";
import { MdPhotoSizeSelectActual} from "react-icons/md";
import { FaMailchimp } from "react-icons/fa6";
import { Context } from '../Context/Context';

const Main = () => {

       
    const{onSent,resultData,showResult,setInput,input,loading,extended, setExtented,
         setRecentPrompt,recentPrompt, theme, toggleTheme}= useContext(Context)
     const toggleSilder = () =>{
      setExtented(!extended);
    }
  return (

    <>        
        
        <div className={`w-full flex flex-col justify-between ${theme ? "text-white": "text-black"}`} >
            
            <div className="md:px-10 py-5 text-2xl flex items-center  justify-between">
                
                <p className='flex p-1.5 items-center gap-3 max-sm:text-xl'>
                  <FiSidebar className='md:hidden text-2xl' onClick={toggleSilder}/>
                  ChatBot</p>
                  <div className='flex  items-center'>
                <div className={`flex gap-2 border-2  ${!theme ? "bg-gray-700" : "bg-white"} px-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out`}onClick={toggleTheme}>
                    <AnimatePresence>
                 { !theme ?(
                        <motion.div
                        initial ={{opacity:1 ,x:0}}
                        animate={{opacity:1,x:-12}}
                        exit={{opacity:0, x:0}}
                        className={`text-white text-[1.5rem] p-1  rounded-full`}
                        ><CiLight/></motion.div>):(<motion.div
                         initial ={{opacity:1 ,x:0}}
                        animate={{opacity:1,x:11}}
                        exit={{opacity:0,x:-20 }}
                        className=' text-[1.4rem] text-black p-1  rounded-full'
                        ><FaMoon className='-rotate-12 '/></motion.div>) }</AnimatePresence>
                </div>
                <p className={`p-2 mx-5 text-sm md:text-lg pt-1.5 ${theme ? "border" : "border-black"} border rounded-full`}><FaRegUser /></p>
                </div>
            </div>

             <div className='flex-1 overflow-y-auto max-h-[calc(100vh-30vh)] hide-scrollbar'>
                {! showResult ? (
                    <div className='flex flex-col text-4xl sm:text-6xl p-2 sm:p-24'>
                        <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>hello, there</span></p>
                        <p>How can I help you Today?</p>
                    </div>
                ):
                <div className='md:px-32 flex-col px-5 py-10 flex gap-7'>
                        <div className='flex md:pr-20 gap-3 justify-end '>  
                            <p className={`bg-gray-700/30 rounded-xl rounded-br-none px-3 py-1.5`}>{recentPrompt}</p>
                            <p className={` p-[11px] text-sm  rounded-full ${theme? "bg-[#1E1E1E] border" : "border border-black"}`}><FaRegUser /></p>
                        </div>
                                     {loading ?(
                        <div className='h-3 w-3 flex gap-3 pt-1.5'>        
                               <p className={`p-1.5 ${theme ? "bg-white" : "bg-black"} animate-pulse rounded-full`}></p>
                               <p className={`p-1.5 ${theme ? "bg-white" : "bg-black"} animate-pulse rounded-full`}></p>
                               <p className={`p-1.5 ${theme ? "bg-white" : "bg-black"} animate-pulse rounded-full`}></p>
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
                <div className={`md:text-xl text-lg flex w-[90%] md:max-w-[60%] mx-auto sticky  ${theme ? "bg-gray-500/50 " : "bg-gray-500/40"} rounded-full`}>
                    <input type="text"
                    onClick={()=>setExtented(false)}
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') onSent();
                     }}
                    onChange={(e) =>setInput(e.target.value)}
                    placeholder='Ask anythink.....'
                    className={`bg-transparent  border-none p-3 outline-none w-full`} />
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