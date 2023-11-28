import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/SkillsSection/Data'
import ProjectsSection from '../components/ProjectsSection'
import Footer from '../components/Footer'

const Home = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
}


  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <SkillsSection { ...homeObjOne } />
    <SkillsSection { ...homeObjTwo } />
    <ProjectsSection />
    <SkillsSection { ...homeObjThree } />
    <Footer />
    </>
  )
}

export default Home