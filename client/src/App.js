import AddExpense from './addExpense/AddExpense';
import './App.css';
import Expense from './getExpense/Expense';
import Update from './updateExpense/Update'
import Report from './Report/Report';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AllExpenses from './AllExpenses/AllExpenses';

import Sidebar from './Sidebar/Sidebar';

function App() {
 return (
  
  <>

  <BrowserRouter>
    <div className='main'>

  <Sidebar />
  
  <div className='main-content'>
  <Routes>
    <Route path="/" element={<Expense/>}/>
    <Route path='/add' element={<AddExpense/>}/>
            <Route path="/update/:id" element={<Update />} />
                        <Route path="/report" element={<Report />} />
            <Route path="/settings" element={<Report />} />
                        <Route path="/allexpenses" element={<AllExpenses />} />



    </Routes>
  </div></div>
  </BrowserRouter>
  
  </>
 )
}

export default App;
