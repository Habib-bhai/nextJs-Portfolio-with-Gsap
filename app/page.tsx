"use client"
import Footer from "./components/Footer";
import LoadingScreen from "./components/loader";
import Link from "next/link";
// import {useHeadingContext} from "./context/HeadingContext";


export default function Home() {

//  let {headingDelay}= useHeadingContext()
//  let {loaderDelay} = useHeadingContext()
  
  return (
<>
    <div className="bg-gray-900 w-[100vw] h-screen ">
      <LoadingScreen/>
      
      <div className="w-screen text-white  flex flex-col justify-center items-center mt-[20vh] gap-5  ">
        <h1 className="text-[52px] font-semibold ">HELLO WORLD!</h1>
        <h3 className="sm:text-[32px] text-[24px] font-medium">Welcome to my NEXT.JS portfolio</h3>
        <div className="flex justify-center gap-3 ">
        <Link href={"/portfolio"}><button className="border-2 border-white p-4 font-semibold hover:bg-white hover:text-cyan-400 hover:transition-all hover:ease-in-out hover:duration-1000 rounded-3xl">PORTFOLIO</button></Link>
          <Link href={"/contact"}><button className="border-2  border-white p-4 font-semibold hover:bg-white hover:text-cyan-400 hover:transition-all hover:ease-in-out hover:duration-1000 rounded-3xl  "> CONTACT ME </button></Link>
        </div>
      </div>

    </div>

</>

  );
}
