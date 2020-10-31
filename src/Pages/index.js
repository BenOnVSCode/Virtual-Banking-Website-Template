import React, { useState } from 'react'
import Footer from '../Components/footer/index.js'
import HeroSection from '../Components/HeroSection.js'
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/infoSection/Data.js'
import InfoSection from '../Components/infoSection/index.js'
import Navbar from '../Components/Navbar'
import Services from '../Components/services/index.js'
import Sidebar from '../Components/Sidebar'

const Home = () => {

    const [isOpen, setisOpen] = useState(false) 

    const toggle = () => {
        setisOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
