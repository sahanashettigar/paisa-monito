import React from 'react'
import { useSelector } from 'react-redux'
import Card from './card'
import './expense-list.css'
function ExpenseList() {
  const {expenseList:list,query}=useSelector(state=>state.expenses)
  const filteredList=list.filter(item=>item.title.includes(query))
  return (
    <div className="expense-list">{
      filteredList.length?list.map(item=>(
        <Card item={item}></Card>
      )): 
      <div className="empty-state">
        Your expense list is empty!
      </div>
    }</div>
  )
}

export default ExpenseList