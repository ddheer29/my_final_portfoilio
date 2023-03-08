import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

const Project = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my recent projects" />
      <Work />
      <Footer />
    </>
  )
}

export default Project