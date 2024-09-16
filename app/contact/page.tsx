import React from 'react'
import LoadingScreen from '../components/loader'
import Navbar from '../components/navbar'
import Heading from '../components/Heading'

function contact() {
  return (
    <>
    <div className='w-screen h-screen bg-gray-900'>

    <LoadingScreen/>
    <Navbar/>
    <Heading heading='Contact Me'/>

      <div>
        <form >
          

        </form>

      </div>
    </div>
    </>
  )
}

export default contact