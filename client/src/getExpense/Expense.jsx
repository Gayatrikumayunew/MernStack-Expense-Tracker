import React, { useEffect, useState } from 'react'
import "./expense.css"
import axios from "axios"
import Card from '../summaryCard/Card'
import ExpenseChart from '../summaryCard/ExpenseChart'
import MonthlyChartExpense from '../summaryCard/MonthlyChartExpense'
// import IncomeExpenseChart from '../summaryCard/IncomeExpenseChart'
const Expense=()=>{
const [expense,setExpense]=useState([])
const[income,setIncome]=useState([]);

//getting income model data from backend

useEffect(()=>{
  const fetchincome=async()=>{
    try{
      const res=await axios.get("http://localhost:8000/api/income/getincome");
      console.log(res)
      setIncome(res.data)

    }catch(er){
      console.log(er)
    }
  }
  fetchincome()
},[])
// reducing amount of data
const total=income.reduce(
  (total,item)=>total+Number(item.amount),0
);


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
const totalExpense=expense.reduce(
    (total,item)=>total+Number(item.amount),0
)
// month wise expenses
//acc means accumulate ,group of our calculate data
const monthlyExpenses=expense.reduce((acc,item)=>{
    const date=new Date(item.date);
    const month=date.toLocaleDateString("en-US",{
        month:"short",
        year:"numeric"
    });
    acc[month]=(acc[month]||0)+Number(item.amount);
    return acc;
},{});
console.log(monthlyExpenses)
 const chartData=Object.entries(monthlyExpenses).map(([month,amount])=>{
    return{
    month,
    amount
    };
 }).sort((a,b)=>new Date(`1${a.month}`)-new Date(`1${b.month}`));

const balance=total-totalExpense

  return (
    <>
    <div className="head">
            <h4>Welcome back!</h4>
<p>Here's your financial overview for today.</p></div>
        <div className="card1">
             <Card title="Total income" amount={total} icon=" fa-solid fa-wallet" bgcolor="#3fc88a" color="white" backgroundColor="#dff4ea"/>
                            <Card title=" Total Expense" amount={totalExpense} icon="fa-solid fa-money-bill-1-wave" bgcolor="#f6486c" color="white" backgroundColor="rgb(242, 231, 233)" />
                                          <Card title="Balance" amount={balance} icon="fa-solid fa-chart-pie" bgcolor="#3b7ff3" color="white" backgroundColor="#dae3f3" /></div>
    
    {/* chart calling */}
    <div className='chart-components'>
        <ExpenseChart expense={expense}/>
<MonthlyChartExpense data={chartData}/>
 
    </div>
            
      
    </>
  )
}

export default Expense
