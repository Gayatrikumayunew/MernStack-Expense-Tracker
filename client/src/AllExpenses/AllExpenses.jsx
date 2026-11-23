import React, { useEffect, useState } from 'react'
import "../getExpense/expense.css"
import axios from "axios"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const AllExpenses = () => {
const [expense,setExpense]=useState([])


//getting income model data from backend
const categoryColors={
    Food:"#F53E0B",
    Travel:"#3B82F6",
    Shopping:"#8B5CF6",
    Bills:"#EAB308",
    Health:"#EF4444",
    Education:"#06B6D4",
    Entertainment:"#EC4899",
    Others:"#14B8A6"

}
// reducing amount of data


useEffect(()=>{
    const fetchData=async()=>{
        try{
            console.log("trying")
            const resp=await axios.get("http://localhost:8000/api/read")
setExpense(resp.data)

        }catch(err){
            console.log(err)
        }
    }
    fetchData()
},[])

const deleteExpense=async(ExpenseID)=>{
    await axios.delete(`http://localhost:8000/api/delete/expense/${ExpenseID}`)
    .then((response)=>{
        setExpense((prevExpense)=>prevExpense.filter((expense)=>expense._id !== ExpenseID ));
         toast.success(response.data.message,{position:"top-right"});

    })
    .catch((error)=>{
        console.log(error)
    })
}
// month wise expenses
//acc means accumulate ,group of our calculate data

  return (
    <>
       
    {/* chart calling */}
    <div className='expenseTable'>

     {/* <IncomeExpenseChart totalIncome={total} totalExpense={totalExpense}/> */}
        {/* <Link to="/add" type='button' className="btn btn-primary"><i class="fa-solid fa-money-check-dollar"></i>Add Expense</Link> */}
    
       {
        expense.length===0?(
            <div className='nodata'>

                <h3>No Data to display</h3>
            </div>):(
       
        
        <table className='table table-bordered'>
            <thead>
                <tr >
                    <th scope='col'>S.No</th>
                    <th scope='col'>Expense</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Description</th>
                                        <th scope='col'>Date</th>

                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    expense.map((expenses,index)=>{
                        return(
<tr >
                    <td>{index+1}</td>
                    <td>{expenses.title}</td>
                    <td>&#8377; {expenses.amount}</td>
                    <td><span className='category-badge' style={{
                        color:categoryColors[expenses.category],backgroundColor:categoryColors[expenses.category]+"20"
                    }}>{expenses.category==="Bills"?"Bills & Utilities":expenses.category}</span></td>
                    <td>{expenses.description}</td>
                    <td>{new Date(expenses.date).toLocaleDateString("en-IN")}</td>
                    <td className='actionbuttons'>
                    <Link to={`/update/`+expenses._id}type="button" class="btn btn-info text-white"><i class="fa-solid fa-pen-to-square"></i></Link>
 <button onClick={()=>deleteExpense(expenses._id)} type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
 </td>
                </tr>
                
                        )
                    })
                }
                
                    

            </tbody>
        </table>
            )}
      
    </div></>
  )
}

  


export default AllExpenses