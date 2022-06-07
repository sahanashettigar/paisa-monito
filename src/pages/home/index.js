import React from 'react'
import ExpenseList from '../../components/expense-list'
import TopFold from '../../components/topfold'
import './home.css'
function Home() {
  return (
    <div className="home">
        <TopFold></TopFold>
        <ExpenseList></ExpenseList>
    </div>
  )
}

export default Home