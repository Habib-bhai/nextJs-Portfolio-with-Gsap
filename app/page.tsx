import Image from "next/image";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Link from "next/link";


export default function Home() {
  return (

    <div className="bg-blue-800 w-[100vw] h-screen ">

      <Loader />
      <Navbar />
      <div className="w-screen flex flex-col justify-center items-center mt-[20vh] gap-5  ">
        <h1 className="text-[52px] font-semibold ">HELLO WORLD!</h1>
        <h3 className="sm:text-[32px] text-[24px] font-medium">Welcome to my NEXT.JS portfolio</h3>
        <div className="flex justify-center gap-3 ">
        <Link href={"/portfolio"}><button className="border-2 border-white p-4 font-semibold hover:bg-white hover:text-cyan-400 hover:transition-all hover:ease-in-out hover:duration-1000 rounded-3xl">PORTFOLIO</button></Link>
          <Link href={"/contact"}><button className="border-2  border-white p-4 font-semibold hover:bg-white hover:text-cyan-400 hover:transition-all hover:ease-in-out hover:duration-1000 rounded-3xl  "> CONTACT ME </button></Link>
        </div>
      </div>

    </div>

  );
}
