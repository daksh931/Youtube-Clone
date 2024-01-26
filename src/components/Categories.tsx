import { useState,useRef } from "react"
import { categories } from "../Data/home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Container } from "postcss";

export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    let categories2: string[]
    categories2 = categories

    const [isLeftVisible,setIsLeftVisible] = useState(true);
    const [isRightVisible,setIsRightVisible] = useState(true);
    const [translate,setTranslate] = useState(300);

    const TRANSLATE_AMOUNT = 200
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <div className="main m-2 mt-5 overflow-x-hidden mx-5">
                <div className="categoryPills transition-transform flex ml-8 gap-6 py-3"
                style={ {transform: `translateX(-${translate}px)`}}>

                    {categories2.map(category => (
                        <button key={category} onClick={() => { setSelectedCategory(category) } }
                            className={` p-[1px] px-2.5 whitespace-nowrap rounded-md font-semibold 
                                            hover:bg-slate-400 
                            ${selectedCategory === category ? "bg-black text-white -translate-y-[1px]" : "bg-slate-200 text-black"}`}>

                            {category}

                        </button>
                    ))}
                </div>
            </div>


            {/* LEFT ARROW <-- */}

            {isLeftVisible && (
            <div className=" absolute leftArrow ml-4 left-0 top-[92px] -translate-y-1/2
                            rounded-l-2xl p-1.5 pl-2 pr-12 bg-gradient-to-r from-white from-50% to-transparent"
                            >
                <button className=""
                    onClick={() => {
                        setTranslate(translate=> {
                            const newTranslate = translate - TRANSLATE_AMOUNT
                            if(newTranslate<=0) return 0
                            return newTranslate
                        })
                    }} >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            )} 

            {/* RIGHT ARROW --> */}
            {isRightVisible && (
            <div className=" absolute rightArrow ml-8 right-0 top-[92px] -translate-y-1/2 flex justify-end
                            rounded-r-2xl p-1.5 pl-12 pr-6 bg-gradient-to-l from-white from-50% to-transparent">
                <button className="" 
                onClick={()=> { setTranslate(translate=> {

                    if(containerRef.current == null) return 
                    const newTranslate = translate - TRANSLATE_AMOUNT
                    const edge = containerRef.current.scrollWidth
                    const width= containerRef.current.clientWidth
                    if(newTranslate + width >= edge){
                        return edge - width
                    }
                    return newTranslate
                })

                }}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            )} 
           
        </>
    )
}