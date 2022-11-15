import React from 'react'
import FirstImg from '../Components/Home/FirstFrontImg/FirstImg'
import Plans from '../Components/Home/Plans/Plans'
import MainCard from '../Components/Home/Plan-Cards/MainCard'
import Fitness from '../Components/Home/Classe/Fitness'
import MainClass from '../Components/Home/Classe/MainClass'
import Treners from '../Components/Home/Treners/Treners'
import MiddalPic from '../Components/Home/MiddalPic/MiddalPic'
import PlanTrener from '../Components/Home/Treners/PlanTrener'
import FooterSection from '../Components/Home/FooterSection/FooterSection'

const Home = () => {
  return (
    <div>
        <FirstImg/>
        <Plans/>
        <MainCard/>
        <Fitness/>
        <MainClass/>
        <MiddalPic/>
        <PlanTrener/>
        <Treners/>
        <FooterSection/>
    </div>
  )
}

export default Home