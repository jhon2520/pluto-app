import React from 'react'
import Navbar from '../components/Navbar'
import SpendMain from '../components/SpendMain'
import TableSavings from '../components/TableSavings'

const SavingPage = () => {
    return (
        <div>
            <Navbar/>
            <SpendMain/>
            <TableSavings/>
        </div>
    )
}

export default SavingPage