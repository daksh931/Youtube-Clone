
export default function Navbar() {

    return (
        <>
            <div className="flex justify-between pt-2 px-5 items-center">
                <div className="flex items-center">

                    <div className="nav  hover:bg-slate-200 hover:rounded-full">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-11 p-3" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </div>

                    <h4 className="px-1 font-serif">
                        YouTube
                    </h4>
                </div>

                <div className="search bar button">
                    <label className="mb-2 text-sm font-medium text-gray-600 sr-only dark:text-white">Search</label>
                    <div className="relative flex   ">
                        <div className="search ">

                            <input type="search" id="default-search" className="block rounded-l-full w-[700px] p-3 px-6  ps-10 text-sm text-cyan-900 border border-gray-300   focus:border-blue-500 dark:bg-cyan-700 dark:border-cyan-600 dark:placeholder-cyan-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search " required />

                        </div>
                        <div className=" border border-gray-300 px-6  bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-r-full">


                            <svg className="h-10 w-5  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -2 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>

                        </div>
                    </div>

                </div>

                <div >
                <button className="py-1 px-5 rounded-2xl font-semibold border-2 text-cyan-600  hover:bg-blue-100"> Sign in</button>
                </div>
            </div>
        </>
    )
}