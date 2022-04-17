import React from 'react'

import Navbar from '../components/Navbar'
import HomeMainInfo from '../components/HomeMainInfo'
import HomeSkills from '../components/HomeSkills'
import HomeContact from '../components/HomeContact'

const HomePage = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            {/* main info */}
            <HomeMainInfo/>
            {/* funcionalidades */}
            <HomeSkills/>
            {/* contacto */}
            <HomeContact/>
        </div>
    )
}

export default HomePage