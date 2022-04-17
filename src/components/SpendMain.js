import React from 'react'
import appImages from '../helpers/appImages'
import styles from "../css/SpendPage.module.css"

const SpendMain = () => {
    return (

        <>
            <div className={styles.main_info_container}>
                <section className={styles.section}>
                    <img src={appImages("./main2-img.png")} alt="" />
                    <hgroup className={styles.grupoh}>
                        <h2>MANTÉN TUS GASTOS ORGANIZADOS</h2>
                        <p>Aquí puedes llevar el registro de tus gastos, revisar el histórico de los mismos y editar la información</p>
                    </hgroup>
                </section>
            </div>
            <hr className={styles.horizontal} />
        </>
    )
}

export default SpendMain