// import logo from "../assets/pic.jpg"

export default function Card(props:any) {

    return(
        <>
        <div  className=" m-2" >
          <div  className=""> 
            <img className="w-80 rounded-2xl" src={props.image}></img>
          </div>

          <div className="-bottom of card-  grid grid-cols-12">
              <div className="logo py-2  col-span-2">

                  <img className="w-10 h-10 rounded-full  " src={props.image}></img>
              </div>
              <div className="headText p-1 col-span-10">
                  <h2 className="font-semibold " >
              
                      {props.title}
                  </h2>
                  <p className="text-slate-600 text-sm ">{props.author} </p>
                  <p className="text-slate-600 text-sm ">{props.timestamp}</p>
                            
              </div>
          </div>
        </div>
        </>
    )
}