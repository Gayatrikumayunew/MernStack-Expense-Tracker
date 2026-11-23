import React, { useEffect, useState  } from 'react'
import "./update.css"
import { Link ,useNavigate, useParams} from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'

const UpdateExpense = () => {
const expenses={
  title:"",
  amount:"",
  category:"",
  date:"",
  description:""
};
const[expense,setExpense]=useState(expenses)
const navigate=useNavigate();
const{id}=useParams();
const inputHandler=(e)=>{
  const{name,value}=e.target
  console.log(name,value)
  setExpense({...expense,[name]:value})
};
// getting info through id
useEffect(()=>{
  axios.get(`http://localhost:8000/api/findexpense/${id}`).then((response)=>{
    setExpense({...response.data,date:response.data.date?response.data.date.split("T")[0]:""})
  })
    .catch((error)=>{
      console.log(error)
    })
},[id])

const submitform=async(e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:8000/api/update/expense/${id}`,expense).then((response)=>{
    // console.log("Expense Added Successfully")
    toast.success(response.data.message,{position:"top-right"});
    
    navigate("/")
  })
  .catch((error)=>{
    console.log(error)
  })
}


  return (
    <div className='addExpense'>
      <Link to="/" type='button' class="btn btn-secondary"><i class="fa-solid fa-backward-fast"> Back </i></Link>
      <h3>Update Expense</h3>
      <form className='addExpenseForm' onSubmit={submitform}>
<div className='inputGroup'>
  <label htmlFor="title">Title</label>
  <input 
  type='text'
  id='title'
  name='title'
  value={expense.title}
  onChange={inputHandler}
  autoComplete='off'
  placeholder='Enter your Expense'
  />
</div>

<div className='inputGroup'>
  <label htmlFor="amount">Amount</label>
  <input 
  type='number'
  id='amount'
    onChange={inputHandler}

  name='amount'
  value={expense.amount}
  autoComplete='off'
  placeholder='Enter Amount'
  />
</div>
<div className='inputGroup'>
  <label htmlFor="date">Date</label>
  <input 
  type='date' id='date' name='date' value={expense.date} onChange={inputHandler}/>
</div>
<div className='inputGroup'>
  <label htmlFor="Category">Category</label>
  <select id='category'   onChange={inputHandler}
name='category' className='category' value={expense.category}
  >
    <option value="">Select Category</option>
    <option value="Food">Food</option>
    <option value ="Travel">Travel</option>
    <option value="Shopping">Shopping</option>
    <option value="Bills">Bills & Utilities</option>
    <option value="Health">Health</option>
    <option value="Education">Education</option>
    <option value="Entertainment">Entertainment</option>
    <option value="Other">Other</option>
  </select>

</div>
<div className='inputGroup'>
  <label htmlFor="description">Description</label>
  <input 
    onChange={inputHandler}
value={expense.description}
  type='text'
  id='description'
  name='description'
  autoComplete='off'
  placeholder='Description'
  />
</div>

<div className='inputGroup'>
  <button type='submit' class="btn btn-primary">
    Submit
  </button>
</div>

      </form>
       </div>
  )
}

export default UpdateExpense