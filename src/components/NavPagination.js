import React from 'react'
import styles from "../css/NavPagination.module.css"

const NavPagination = ({pages,pagination,currentPage,dark}) => {

    return (
        <nav className={dark ?  styles.navbar_dark : styles.navbar}>
            <ul>
                {
                    pages?.map((page,i)=>{
                        return(
                            <li className={(currentPage===page) ? styles.active:styles.no_active} onClick={()=>pagination(page)} key={i}>{page}</li>
                        );
                    })
                }
            </ul>
        </nav>
    )
}

export default NavPagination