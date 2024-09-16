import React from 'react'
import LoadingScreen from '../components/loader'
import Navbar from '../components/navbar'
import Heading from '../components/Heading'

function contact() {
  return (
    <>
    <div className='w-screen sm:h-[200vh] h-[105vh] bg-gray-900'>

    <LoadingScreen/>
    <Navbar/>
    <Heading heading='Contact Me'/>
    
    <div className='w-screen  flex justify-center items-center '>
    <form>
        
        <fieldset >
          <legend >Personal Info</legend>
          <label htmlFor="name" >Name:</label>
          <input type="text" id="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </fieldset>

       
        <fieldset>
          <legend>Subject</legend>
          <label htmlFor="subject">Your Subject:</label>
          <input type="text" id="subject" required />
          <label htmlFor="contact">Contact:</label>
          <input type="text" id="contact" required />
          
        </fieldset>

        <button id='formBtn' type="submit">submit</button>
      </form>
      </div>
      
    </div>
    </>
  )
}

export default contact