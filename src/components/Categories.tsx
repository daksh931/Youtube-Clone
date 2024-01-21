import { useState } from "react"
import { categories } from "../Data/home";


export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    let categories2: string []
    categories2 = categories
 
    

    return (
        <>
            <div className="main m-2 mt-5 overflow-x-hidden">
                <div className="categoryPills transition-transform flex ml-8 gap-6 ">

                    {categories2.map(category => (
                        <button key={category} onClick={()=> {setSelectedCategory(category)}}
                            className={` p-[1px] px-2.5 whitespace-nowrap rounded-md font-semibold 
                                            hover:bg-slate-400 
                            ${selectedCategory === category ? "bg-black text-white": "bg-slate-200 text-black"   }`}>

                            {category}

                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}