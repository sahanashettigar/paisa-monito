import React from 'react'
import AddForm from '../../components/add-form';
import TopFold from '../../components/topfold';
import './add-expense.css'
function AddExpense() {
  return (
    <div className="add-expense">
        <TopFold></TopFold>
        <AddForm></AddForm>
    </div>
  )
}

export default AddExpense;