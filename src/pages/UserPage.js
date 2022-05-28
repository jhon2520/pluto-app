import React from 'react'
import CardUserInfo from '../components/CardUserInfo'
import CardUserPhoto from '../components/CardUserPhoto'
import Navbar from '../components/Navbar'

const UserPage = () => {
    return (
        <div>
            <Navbar/>
            <CardUserPhoto/>
            <CardUserInfo/>
        </div>
    )
}


export default UserPage