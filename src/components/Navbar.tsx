import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
export default function Navbar() {
    const [showFullWidth, setShowFullWidth] = useState(false);
    return (
        <>
            <div className="flex pt-2 px-5 justify-between items-center">
                
                <div className={`backbutton ${showFullWidth? "flex":"hidden" }`}>
                <button onClick={()=>{setShowFullWidth(false)}}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                </div>


                {/*  left elem */}
                <div className={` items-center flex  px-2 h-10 ${showFullWidth? "hidden":"flex" } `}>

                    <div className="nav  hover:bg-slate-200 hover:rounded-full">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-11 p-3" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </div>

                    <h4 className="px-1 font-serif">
                        YouTube Clone
                    </h4>
                </div>

                {/* middle elem  */}
                <div className={` 1  md:flex flex-grow max-w-[600px] px-2 h-10 ${showFullWidth? "flex ":"hidden" } `}>
                    <label className="mb-2 text-sm font-medium text-gray-600 sr-only dark:text-white">Search</label>
                    <div className="flex flex-grow justify-evenly items-center ">
                        <div className="  flex flex-grow ">

                            <input type="search" id="default-search" className=" rounded-l-full w-full p-3 px-6  ps-10 text-sm text-cyan-900 border border-gray-300   focus:border-blue-500 dark:bg-cyan-700 dark:border-cyan-600 dark:placeholder-cyan-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 outline-none" placeholder="Search " required />

                        </div>
                        <div className=" w-18 h-[46px] flex search-bar-icon border border-l-0 border-gray-300 px-6  bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-r-full rounded-none ">

                            <button onClick={() => { }}>
                                <svg className="h-11 w-5  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>

                        </div>


                    </div>

                 
                </div>

                {/* Right elem  Sign up*/}
                {/* Search button visible on small screen */}

                <div className="rightside  flex flex-shrink-0 ">
                    <div className={`ml-3 md:flex ${showFullWidth? "hidden":"flex"} `}>
                    <div className="  border-l-2  rounded-r-0 rounded-full w-10 h-10 search-bar-icon border  border-gray-300   bg-slate-100 hover:bg-slate-300 cursor-pointer md:hidden ">

                        <button  onClick={() => setShowFullWidth(true)}>
                            <svg className="h-9  w-5 text-gray-500 ml-1.5 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>

                    </div>  
                    </div>
                    {/* className={`ml-3 md:flex ${showFullWidth? "flex":"flex"} `} */}
                    <div className={`ml-3 md:flex ${showFullWidth? "hidden":"flex"} `}>
                        <button className="py-1 px-5 rounded-2xl font-semibold border-2 text-cyan-600  hover:bg-blue-100"> Sign in</button>
                    </div>
                 
                </div>

            </div>
        </>
    )
}