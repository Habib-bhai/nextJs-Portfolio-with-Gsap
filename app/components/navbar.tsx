"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"



gsap.registerPlugin(useGSAP)

function Navbar() {

    const tl = gsap.timeline()
    useGSAP(function () {
        tl.to(".sideBar", {
            x: 0,
            duration: 0.3,
        })
        tl.from(".link", {
            x: 150,
            duration: 0.2,
            opacity: 0,
            stagger: 0.2
        })
        tl.from(".close", {
            opacity: 0
        })
    },[])
    tl.pause()

  

   

    return (
        <>

            <div className="flex justify-between items-center mx-8 ">

                <ul className="flex justify-center items-center gap-6 mt-7">
                    <Link href={"https://www.linkedin.com/in/habib007ab92282/"} target="_blank"><li><Image src={"/linkedin.png"} alt="linkedin icon" height={20} width={20} /> </li></Link>

                    <Link href={"https://github.com/Habib-bhai"} target="_blank"><li><Image src={"/github-sign.png"} alt="github" height={20} width={20} className="bg-white" /> </li></Link>

                    <Link href={"https://www.npmjs.com/~habib-ullah"} target="_blank"><li><Image src={"/programing.png"} alt="npm" height={20} width={20} /> </li></Link>
                </ul>
                <Image src={"/menu.png"} alt="hamburger menu" height={30} width={30} className="z-0 cursor-pointer mt-7 bg-white rounded-lg "
                    onClick={()=>{
                        tl.restart()
                        }}
                />

                <div className="sideBar sm:w-[30vw] w-[100vw] h-[70vh] bg-red-600 bg-opacity-50 text-white absolute top-0 right-0 z-[100] backdrop-blur-md sm:translate-x-[30vw] translate-x-[100vw] flex flex-col justify-center gap-9  items-center text-2xl font-semibold rounded-2xl">

                    <Link href={"/"}  className="link z-50"><h2>Home</h2></Link>
                    <Link href={"/about"}  className="link z-50"><h2>About</h2></Link>
                    <Link href={"/portfolio"}  className="link z-50"><h2>Portfolio</h2></Link>
                    <Link href={"/contact"}  className="link z-50"><h2>Contact Me</h2></Link>
                    <Image src={"/close.png"}  width={30} height={30} alt="close button" className=" close absolute top-0 right-0 m-6 cursor-pointer bg-white rounded-[50%] z-50"
                        onClick={ function () {
                            tl.reverse()
                        }}
                    />
                </div>

            </div>
        </>
    )
}

export default Navbar
