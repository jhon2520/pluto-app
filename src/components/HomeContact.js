import React from 'react'
// import appImages from '../helpers/appImages'
// import HomeContactForm from './HomeContactForm'
import styles from "../css/HomeContact.module.css"
import { IoLogoWhatsapp,IoMdGlobe } from "react-icons/io";

const HomeContact = () => {
    return (
        <div className={styles.main_container}>

            <section className={styles.contacto_container}>
                <h2>Información de contacto</h2>

                <div className={styles.icons_info}>
                    <div>
                        <IoMdGlobe className={styles.contact_icon}/>
                        <p>Medellín - Colombia - 2022 </p>
                    </div>
                    <div>
                        {/* poner enlace a whatsapp */}
                        <a
                            target="_blank"
                            rel='noreferrer'
                            href="https://api.whatsapp.com/send?phone=3053776914&text='Hola, estoy usando tu aplicación y tengo la siguiente duda'">
                            <IoLogoWhatsapp className={styles.contact_icon}/>
                        </a>
                        <p>Contáctanos por Whatsapp</p>
                    </div>
                </div>
            </section>
{/* 
            <section className={styles.form_main_container}>
                <div className={styles.form_info}>
                    <h2>Escríbenos</h2>
                    <p>Envíanos un correo con tus sugerencias para mejorar nuestra aplicación, cualquier sugerencia o comentario es muy apreciado</p>
                </div>
                <div className={styles.home_contact}>
                    <HomeContactForm />
                </div>

            </section> */}
        </div>
    )
}

export default HomeContact