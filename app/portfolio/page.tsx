"use client"
import LoadingScreen from '../components/loader'
import Navbar from '../components/navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Card from '../components/card'
import Link from 'next/link'
import Heading from '../components/Heading'


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);

function Portfolio() {

  const width = window.innerWidth
  const breakpoints = {
    sm: 640,
    md: 768
  }

  if(width > breakpoints.sm){
  useGSAP(function () {
  
    gsap.from(".cardContainer ",{
      // transform:"translateX(100%)",
      x: "220%",
      scrollTrigger:{
        trigger: ".cardContainer",
        scroller: "body",
        start: "top 10%",
        end: "top -250%",
        pin: true,
        scrub: 2
      }
    })
  })
}

  return (
    <>
      <div className='bg-gray-900 text-center sm:w-[100%] sm:h-[100%] w-screen  h-[310vh] ' >
        <LoadingScreen />
        <Navbar />

       
       <Heading heading='PORTFOLIO'/>

          <div className='cardContainer w-screen h-screen  flex sm:flex-nowrap flex-wrap gap-5 justify-center items-start mt-16 '>

              <Link href={"https://frolicking-axolotl-41acc6.netlify.app/#"} target='_blank'><Card src='/ss1.png' h1='PORTFOLIO' headingOne='USED' headingTwo='HTML,CSS & JS' /></Link>
           <Link href={"https://simple-recipe-app-next-js.vercel.app/"} target='_blank'><Card src='/ss2.png' h1='RECIPE WEB APP' headingOne='USED' headingTwo='NEXT.JS'/></Link>
           <Link href={"https://hackathon-milestone-4-six.vercel.app/"} target='_blank'><Card src='/ss3.png' h1='RESUME BUILDER' headingOne='USED' headingTwo='HTML,CSS & TS'/></Link>
           <Link href={"https://currency-converter-brohabib.netlify.app/"} target='_blank'><Card src='/ss4.png' h1='CURRENCY CONVERTER' headingOne='USED' headingTwo='REACT.JS'/></Link>
           <Link href={"https://password-generator-brohabib.netlify.app/"} target='_blank'><Card src='/ss5.png' h1='PASSWORD GENERATOR' headingOne='USED' headingTwo='REACT.JS'/></Link>
           <Link href={"https://habib-bhai.github.io/web-based-weather-app/"} target='_blank'><Card src='/ss6.png' h1='WEATHER APP' headingOne='USED' headingTwo='HTML, CSS & JS'/></Link>
           {/* conditional rendering */}
             {width > breakpoints.sm ? <><Card src='/ss5.png' h1='PASSWORD GENERATOR' headingOne='USED' headingTwo='REACT.JS'/> <Card src='/ss6.png' h1='WEATHER APP' headingOne='USED' headingTwo='HTML, CSS & JS'/><Card src='/ss6.png' h1='WEATHER APP' headingOne='USED' headingTwo='HTML, CSS & JS'/><Card src='/ss6.png' h1='WEATHER APP' headingOne='USED' headingTwo='HTML, CSS & JS'/></>: undefined }
          </div>
             
          </div>
      
      
    </>
  )
}

export default Portfolio

