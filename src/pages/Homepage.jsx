import React from 'react'
import Footer from '../components/Footer/Footer'
import FixedFooter from '../components/Footer/FixedFooter'
import Header from '../components/Header/Header'
import HomeSlider from '../components/Home/HomeSlider'
import Options from '../components/Home/OptionFor'
import WhyJoin from '../components/Home/WhyJoin'
import CounselingForm from '../components/Home/CounselingForm'

const Homepage = () => {
    return (
        <div>
            <div className='h-[180px]'>
            <img className="fixed -z-10 w-[1280vh] filter brightness-[50%]" src={require("../assets/images/banner-bg.jpg")} alt="" />
            </div>
            <Header />
            <HomeSlider />
            <Options/>
            <WhyJoin/>
            <CounselingForm/>
            <Footer />
            <FixedFooter />
        </div>
    )
}

export default Homepage