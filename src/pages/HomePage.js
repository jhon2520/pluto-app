import React from 'react'

import Navbar from '../components/Navbar'
import HomeMainInfo from '../components/HomeMainInfo'

const HomePage = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            {/* main info */}
            <HomeMainInfo/>
        </div>
    )
}

export default HomePage