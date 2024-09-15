"use client"
import LoadingScreen from '../components/loader'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Card from '../components/card'


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);

function portfolio() {

  useGSAP(function () {
    gsap.from(".cardContainer",{
      transform:"translateX(200vw)",
      scrollTrigger:{
        trigger: ".cardContainer",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "top -100%",
        scrub: 3,
        pin: true
      }
    })
  })
  return (
    <>
      <div className='bg-black text-center w-[100%] h-[100%]' >
        <LoadingScreen />
        <Navbar />

          <div >
          <h1 className='font-bold text-[42px] bg-red-500 tracking-[0.8rem] text-[#01f3a2]'>PORTFOLIO</h1>
            </div> 
       

          <div className='cardContainer w-screen h-[200vh] flex sm:flex-nowrap flex-wrap  justify-center items-start mt-16 '>

              <Card src='/ss1.png' h1='PORTFOLIO' headingOne='USED' headingTwo='HTML,CSS & JS' />
              <Card src='/ss2.png' h1='RECIPE WEB APP' headingOne='USED' headingTwo='NEXT.JS'/>
              <Card src='/ss3.png' h1='RESUME BUILDER' headingOne='USED' headingTwo='HTML,CSS & TS'/>
              <Card src='/ss4.png' h1='CURRENCY CONVERTER' headingOne='USED' headingTwo='REACT.JS'/>
              <Card src='/ss5.png' h1='PASSWORD GENERATOR' headingOne='USED' headingTwo='REACT.JS'/>
              <Card src='/ss6.png' h1='WEATHER APP' headingOne='USED' headingTwo='HTML, CSS & JS'/>
          </div>
             
          </div>
      
      
    </>
  )
}

export default portfolio

