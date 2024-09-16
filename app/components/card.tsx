import Image from "next/image"

function Card({src,h1, headingOne, headingTwo }:{src:string,h1:string, headingOne:string, headingTwo:string}) {
  return (

    <div  className="card sm:w-[500px] sm:h-[400px] sm:flex-shrink-0 hover:shadow-2xl shadow-2xl shadow-blue-700 hover:shadow-[#01f3a2] hover:transition-colors duration-1000 ease-in-out  rounded-2xl  mx-7 sm:mb-0 mb-12  ">
    <Image src={src} width={450} height={450} alt="screen shot one" className="sm:w-[500px] sm:h-[280px] rounded-2xl"/>
    <h1 className="text-blue-500 mt-12 mx-2" >{h1} </h1>
    <div className="flex justify-between items-center text-white text-[32px] font-bold mx-2"> 
        <h1>{headingOne}</h1>
        <h1>{headingTwo}</h1>
    </div>
    </div>
    
  )
}

export default Card