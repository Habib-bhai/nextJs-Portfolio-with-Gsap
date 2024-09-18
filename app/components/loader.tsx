"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useState } from 'react';


export default function LoadingScreen() {

  const breakpoints = {
    sm: 640,
    md: 768
  }
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Code that uses window
      setWidth(window.innerWidth);
    }
  },[]);
 

    useGSAP(()=>{
    
        gsap.to(".heading",{
            transform:"translateX(2)",
            duration: 1,
            ease: "bounce.out",
            y: 200
        })

        if( width > breakpoints.sm){
          gsap.to(".loader", {
            y: -1000,
            duration: 1,
            delay: 1,
            borderBottomRightRadius:'50%', 
            borderBottomLeftRadius:'50%' 
          })
        }

        if(width < breakpoints.sm){
          gsap.to(".loader", {
            y: -1000,
            duration: 0.5,
            borderBottomRightRadius:'10rem', 
            borderBottomLeftRadius:'10rem', 
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

