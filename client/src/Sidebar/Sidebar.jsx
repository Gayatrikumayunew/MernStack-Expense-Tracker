import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import'./sidebar.css'

const Sidebar = () => {
  const[isOpen,setIsOpen]=useState(true);
  
  return (
    <div className={`sidebar ${isOpen?"open":"closed"}`} >
      {/* <button className='sidebar-toogle' onClick={()=>setIsOpen(!isOpen)}></button> */}
     <div className='sidebar-heading'> 
<h2><i class="fa-solid fa-money-check-dollar"></i><span className='heading-text'>Expense Tracker</span></h2>
<button className={`sidebar-toggle ${isOpen ? "active":"unactive"}`}
      onClick={()=>setIsOpen(!isOpen)}
      aria-label='Toggle sidebar'>
        <span className='toggle-circle'></span>
      </button></div>
<div className='links'>
<Link to="/">
<i className='fa-solid fa-house'></i>
<span>
Home</span>
</Link>
<Link to="/add">
<i className='fa-solid fa-plus'>
</i>
<span>
Add Expense
</span>
</Link>
<Link to="/report">
<i class="fa-solid fa-file"></i><span>
Report
</span>
</Link>
<Link to="/allexpenses">
<i class="fa-solid fa-folder-open"></i><span>
All Expenses
</span>
</Link>

<Link to="/settings">
<i class="fa-solid fa-gear"></i>
<span>
Settings
</span>
</Link>

{/* box making  */}
<div className='box'>
  <h4>Better Money</h4>
  <h4>Better Future</h4>
  <p>Track your expenses and achieve your goals.</p>
</div>
</div>

    </div>
  )
}

export default Sidebar