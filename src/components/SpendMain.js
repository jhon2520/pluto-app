import React from 'react'
import styles from "../css/SpendPage.module.css"

const MainSavingSpend = ({img,titulo,parrafo}) => {
    return (

        <>
            <div className={styles.main_info_container}>
                <section className={styles.section}>
                    <img src={img} alt="" />
                    <hgroup className={styles.grupoh}>
                        <h2>{titulo}</h2>
                        <p>{parrafo}</p>
                    </hgroup>
                </section>
            </div>
            {/* <hr className={styles.horizontal} /> */}
        </>
    )
}

export default MainSavingSpend