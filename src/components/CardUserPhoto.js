import React from 'react'
import appImages from '../helpers/appImages'

const CardUserPhoto = () => {
    return (
        <div>

        <div>
            <img src={appImages("./user-img.jpg")}  alt="" />
            <h3>Nombre Usuario </h3>
        </div>

    </div>
    )
}

export default CardUserPhoto