import React, { useContext } from 'react'
// import './Main.css'
import { FaRegUser } from "react-icons/fa";
import { IoMicSharp } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaMailchimp } from "react-icons/fa6";
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
import { div } from 'framer-motion/client';

const Main = () => {

    const{onSent,resultData,showResult,setInput,input,loading}= useContext(Context)
    console.log("ResultData: ", resultData);

  return (

    <>
        <div className='w-full  bg-gradient-to-r from-[#1E1E1E] to-[#121212]  text-white'>
            <div className="md:px-10 px-3 py-5 text-2xl flex items-center  justify-between">
                <p>ChatBot</p>
                <p><FaRegUser /></p>
            </div>

            <div className=' w-full h-[80%]  overflow-y-auto hide-scrollbar'>
                {! showResult ? (
                    <div className='flex flex-col text-4xl sm:text-6xl max-sm:px-5 max-sm:py-24  sm:p-36'>
                        <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>hello, there</span></p>
                        <p>How can I help you Today?</p>
                    </div>
                ):
                <div className='md:px-32 px-10 py-10 flex gap-5'>
                    <p className=' text-2xl'><FaMailchimp /></p>
                                     {loading ?(
                        <div className='h-3 w-3 flex gap-3'>
                               <p className='p-2 bg-white animate-pulse rounded-full'></p>
                               <p className='p-2 bg-white animate-pulse rounded-full'></p>
                               <p className='p-2 bg-white animate-pulse rounded-full'></p>
                        </div>
                    ):(<p dangerouslySetInnerHTML={{ __html: resultData || "No data" }} 
                    className=''
                    ></p>


                    )}
                </div>
                }
            </div>

            {/* bottom field  */}

            <div className='w-full flex sticky flex-col justify-center pb-20 items-center h-[20%]'>
                <div className='md:text-2xl text-lg flex w-[97%] md:w-[60%] bg-gray-500/50  rounded-full'>
                    <input type="text"
                    value={input}
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
    // <div className='w-full'>
    //     <div className=" nav flex justify-between text-2xl p-5">
    //         <p>ChatBot</p>
    //         <p><FaRegUser /></p>
    //     </div>
    //     <div className="main-container ">   

    //             {!showResult ? (
    //                      <div className="greet text-6xl flex justify-center items-center">
    //          <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>hello, there</span></p>
    //          <p>How can I help you Today?</p>
    //        </div>
    //             ): <div className="result flex justify-start w-full">
    //                 <img src={assets.user_icon} alt="" className='rounded-full'/>         
                    // {loading ?(
                    //     <div className='loader'>
                    //             <hr />
                    //             <hr />
                    //             <hr />
                    //     </div>
                    // ):(<p dangerouslySetInnerHTML={{ __html: resultData || "No data" }} 
                    // className=' bg-gray-500'
                    // ></p>


                    // )}
    //             </div>
    //             }
          
    
    //     <div className="main-bottom  ">
    //         <div className="search-box text-2xl flex bg-gray-500/50">
    //             <input type="text"
    //             onChange={(e) =>setInput(e.target.value)}
    //             className='bg-transparent border-none p-5 outline-none'
    //             value={input}
    //             placeholder='Ask anything'/>
    //             <div className='flex gap-3'>
    //                 <img src={assets.gallery_icon} alt="" className='w-10'/>
    //                 <p><IoMicSharp /></p>
    //                 <p onClick={() =>{onSent();}} ><IoSendSharp /></p>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // </div>
  )
}

export default Main