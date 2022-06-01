import React,{useState,useEffect} from 'react'
import appImages from '../helpers/appImages'
import styles from "../css/HomePage.module.css"
import DarkMode from './DarkMode';
import { BsFillArrowUpCircleFill } from "react-icons/bs";



const HomeMainInfo = () => {

    //scroll position to render de up-img
    const [scrollPosition, setScrollPostion] = useState(0);

    const handleScroll = ()=>{
        const position = window.scrollY;
        setScrollPostion(position);
    }
    
    useEffect(() => {
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    }, []);

    const handleUpScrollPosition = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
        <>
        <DarkMode/>
        <div className={styles.main_container}>
            <div className={styles.text_container}>
                <h2>ORDENA Y REGISTAS TUS MOVIMIENTOS DE DINERO Y TAREAS PENDIENTES</h2>
                <p>Con esta aplicación podrás llevar un registro de todos los gastos y ahorros que realices en tu día a día. Asimismo, lleva tu listado de tareas pendientes. También puedes visualizar toda tu información de forma cómoda en la sección <span>Dashboard</span></p>

                {/* <p>También puedes exportar tu información en un archivo excel</p> */}
            </div>
            <div className={styles.img_container}>
                <img src={appImages("./main-img.png")} alt="" />
            </div>
        </div>
        {
            (scrollPosition>350) && <BsFillArrowUpCircleFill onClick={handleUpScrollPosition}  className={styles.img_up}/>
            
        }
        <hr className={styles.horizontal} />
        </>
    )
}

export default HomeMainInfo