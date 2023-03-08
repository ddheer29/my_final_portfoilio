import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <HeroImg2 heading="CONTACT ME" text="Let's have a chat" />
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact