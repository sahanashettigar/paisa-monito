import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { categories } from '../../constants/add-expense';
import { addExpense } from '../../redux/actions/expenses';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './add-form.css'
import SuccessModal from './sucess-modal';
function AddForm() {
    const cat=categories
    const [categoryopen,setcategoryopen]=useState(false)
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [category,setCategory]=useState();
    const [modal,setModal]=useState(false);
    const dispatch=useDispatch();
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleAmount=(e)=>{
        const value=parseFloat(e.target.value);
        if(isNaN(value)){
            setAmount("");
        }
        else{
            setAmount(value);
        }
    }
    const handleCategory=(category)=>{
        setCategory(category);
        setcategoryopen(false);
    }
    const handleSubmit=()=>{
        if(title==='' || amount==='' || category===undefined){
            const notify=()=>toast('please enter valid data');
            notify();
            return;
        }
        const data={
            title:title,
            amount,
            category,
            createdAt:new Date()
        };
        //console.log(data);
        dispatch(addExpense(data));
        setModal(true);
    }
    return (
    <div className='add-form'>
        <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        />
        <SuccessModal ModalOpen={modal} setModalOpen={setModal}></SuccessModal>
        <div className='form-item'>
            <label>Title</label>
            <input 
            placeholder='Give a name to your expenditure' value={title} 
            onChange={(e)=>handleTitle(e)}>
            </input>
        </div>
        <div className='form-item'>
        <label>Amount ₹</label>
            <input 
            className='amount-input'
            placeholder='Enter amount' value={amount} 
            onChange={(e)=>handleAmount(e)}>
            </input>
        </div>
        <div className='category-container-parent'>
            <div className='category'>
                <div className='category-dropdown' onClick={(e)=>setcategoryopen(!categoryopen)}>
                    <label>{
                        category?category.title:'Category'
                    }</label>
                    <i class="fi fi-rr-angle-small-down"></i>
                </div>
                {categoryopen&&<div className='category-container'>
                    {cat.map(category=>(
                        <div 
                        key={category.id} 
                        className='category-item'
                        style={{borderRight:'5px solid'}}
                        onClick={()=>handleCategory(category)}>
                            <label>{category.title}</label>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
        <div className="form-add-button">
            <div onClick={handleSubmit}>
                <label>Add</label>
                <i class="fi fi-rr-paper-plane"></i>
            </div>
        </div>
    </div>
  )
}

export default AddForm