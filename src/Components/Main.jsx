import React, { useContext } from 'react'
// import './Main.css'
import { FaRegUser } from "react-icons/fa";
import { IoMicSharp } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaMailchimp } from "react-icons/fa6";
import { Context } from '../Context/Context';

const Main = () => {

    const{onSent,resultData,showResult,setInput,input,loading}= useContext(Context)
    console.log("ResultData: ", resultData);

  return (

    <>
        <div className='w-full flex flex-col justify-between bg-gradient-to-r  from-[#1E1E1E] to-[#121212]  text-white'>
            <div className="md:px-10 px-3 py-5 text-2xl flex items-center  justify-between">
                <p>ChatBot</p>
                <p><FaRegUser /></p>
            </div>
             <div className='flex-1 overflow-y-auto max-h-[calc(100vh-30vh)] hide-scrollbar'>
                {! showResult ? (
                    <div className='flex flex-col text-4xl sm:text-6xl p-5 sm:p-24'>
                        <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>hello, there</span></p>
                        <p>How can I help you Today?</p>
                    </div>
                ):
                <div className='md:px-32 px-5 py-10 flex gap-3'>
                    <p className=' text-2xl'><FaMailchimp /></p>
                                     {loading ?(
                        <div className='h-3 w-3 flex gap-3 pt-1.5'>
                               <p className='p-1.5 bg-white animate-pulse rounded-full'></p>
                               <p className='p-1.5 bg-white animate-pulse rounded-full'></p>
                               <p className='p-1.5 bg-white animate-pulse rounded-full'></p>
                        </div>
                    ):(<p dangerouslySetInnerHTML={{ __html: resultData || "No data" }} 
                    className=''
                    ></p>
                    )}
                </div>
                }
            </div>

            {/* bottom field  */}

            <div className='w-full flex  flex-col pb-[env(safe-area-inset-bottom)] md:pb-14 items-center'>
                <div className='md:text-2xl text-lg flex w-[90%] md:max-w-[60%] mx-auto sticky  bg-gray-500/50  rounded-full'>
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
                      <p onClick={() =>{onSent();}} 
                        className='flex justify-center items-center pr-5 cursor-pointer'><IoSendSharp /></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main