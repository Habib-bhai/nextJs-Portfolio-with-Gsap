"use client"
import Image from "next/image"
import LoadingScreen from "../components/loader"
import Navbar from "../components/navbar"
// import "@/app/about/comp.css"
import "../globals.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Heading from "../components/Heading"

function about() {

useGSAP(function(){
  gsap.from(".headingToAnimate",{
    x:100,
    delay: 2,
    opacity:0,
    duration:2.5,
    ease: "elastic.out(1,0.3)",
    y: -300
  })
})

  return (
    <>
    <div className="w-screen h-screen bg-gray-900">

    <LoadingScreen/>
    <Navbar/>

    <Heading heading="About Me"/>

    
    <div className="w-screen h-screen relative bg-gray-900 flex sm:flex-row flex-col sm:gap-2 gap-1 sm:mt-10 mt-10 justify-center items-start">
          <Image
            src={"/avatar.png"}
            alt="avatar"
            height={300}
            width={300}
           className="sm:absolute sm:left-24 mx-auto w-62 h-62 bg-[#00a6ff] text-center rounded-full shadow-2xl shadow-[#01f3a2]"
          />

          <div className="text-white w-screen h-screen bg-gray-900 text-center">
              <h1 className="headingToAnimate sm:text-[52px] sm:ml-0 text-[26px]  sm:absolute sm:right-24 font-bold sm:shadow-2xl sm:shadow-[#00a6ff] shadow-xl shadow-[#00a6ff] ">FRONT END DEVELOPER</h1>
              <div className="sm:w-[450px] w-[380px] font-mono sm:h-32 sm:absolute sm:right-48 sm:top-20 mt-10">
                <p>Hello Everyone! I'm HABIB ULLAH. A boy of 18 Who has Fallen in "LOVE" with Technology. My Learning to code journey started back in the 2nd year of College, when me and my Buddies won a Science exhibitions 1st prize for our college. In those projects I got the opportunity to code the "Arduino" circuits using C language. That victory ignited my ZEAL, so, I got into the wonderland of Web-Development. Exploring different roadmaps, I started learning JavaScript and Chose "MERN" Stack.So, the journey is been on its peak, exploring and conquering projects and ERRORS, and Am on my way to Become a Profficient FULL-STACK-DEVELOPER.</p>
              </div>              
          </div>

        </div>
    </div>
    </>
  )
}

export default about