// import logo from "../assets/pic.jpg"

export default function Card(props:any) {

    return(
        <>
        <div className="maincard flex justify-center m-2 p-2 py-4">


        <div  className="Card " >
          <div  className="img "> 
            <img className="rounded-2xl" src={props.image}></img>
          </div>

          <div className="-bottom of card-  grid grid-cols-7 sm:grid-cols-10">
              <div className="logo py-2  pl-2 col-span-1 sm:col-span-2">

                  <img className="w-10 h-10 rounded-full  " src={props.image}></img>
              </div>
              <div className="headText py-1 pl-2 col-span-6 sm:col-span-8">
                  <h2 className="font-semibold " >
              
                      {props.title}
                  </h2>
                  <p className="text-slate-600 text-sm ">{props.author} </p>
                  <p className="text-slate-600 text-sm ">{props.timestamp}</p>
                            
              </div>
          </div>
        </div>
        </div>
        </>
    )
}