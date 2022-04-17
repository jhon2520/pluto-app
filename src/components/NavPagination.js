import React from 'react'
import styles from "../css/NavPagination.module.css"

const NavPagination = ({pages,pagination,currentPage}) => {

    return (
        <nav className={styles.navbar}>
            <ul>
                {
                    pages.map((page,i)=>{
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