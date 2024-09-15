"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



export default function LoadingScreen() {

  const width = window.innerWidth
  let breakpoints = {
    sm: 640,
    md: 768
  }

    useGSAP(()=>{
    
        gsap.to(".heading",{
            transform:"translateX(2)",
            duration: 1,
            ease: "bounce.out",
            y: 200
        })

        if(width > breakpoints.sm){

          gsap.to(".loader", {
            y: -1000,
            duration: 0.5,
            delay: 1,
            borderBottomRightRadius:`50%`, 
            borderBottomLeftRadius:`50%`, 
          })
        }

        else if(width < breakpoints.sm){
          gsap.to(".loader", {
            y: -1000,
            duration: 0.5,
            delay: 1,
            borderBottomRightRadius:`10rem`, 
            borderBottomLeftRadius:`10rem`, 
          })
        }


    })



  return (
    <>
      
        <div className={`loader fixed inset-0 bg-black text-white flex justify-center items-center  transition-transform duration-1000 z-10 `}>
          <h1 className="heading text-2xl sm:text-4xl sm:tracking-[2rem] tracking-[1rem] mx-auto z-10">Loading</h1>
        </div>
          </>
  );
}

