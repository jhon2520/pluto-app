import React,{useState,useEffect} from 'react'
import appImages from '../helpers/appImages'
import styles from "../css/HomePage.module.css"

const HomeMainInfo = () => {

    //scroll position to render de up-img
    const [scrollPosition, setScrollPostion] = useState(0);

    const handleScroll = ()=>{
        const position = window.scrollY;
        setScrollPostion(position);
    }
   // console.log(scrollPosition);
    
    useEffect(() => {
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    }, []);

    const handleUpScrollPosition = ()=>{
        console.log("click");
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
        <>
        <div className={styles.main_container}>
            <div className={styles.text_container}>
                <h2>MANTÉN TUS FINANZAS ALMACENADAS</h2>
                <p>Con esta aplicación podrás llevar un registro de todos los gastos y ahorros que realices. También puedes ver en un <span>Dashboard</span> todas tus operaciones de forma cómoda</p>

                <p>También puedes exportar tu información en un archivo excel</p>
            </div>
            <div className={styles.img_container}>
                <img src={appImages("./main-img.png")} alt="" />
            </div>
        </div>
        {
            (scrollPosition>150) && <img onClick={handleUpScrollPosition}  className={styles.img_up} src={appImages("./up-img.png")} alt="" />
            
        }
        <hr className={styles.horizontal} />
        </>
    )
}

export default HomeMainInfo