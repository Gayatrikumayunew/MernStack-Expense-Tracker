import express from 'express'
import { create, getAllExpenses,getExpenseById,update,deleteExpense} from '../controller/expenseController.js'

const route=express.Router();
route.post("/createexpense",create)
route.get("/read",getAllExpenses)
route.get("/findexpense/:id",getExpenseById);
route.put("/update/expense/:id",update)
route.delete("/delete/expense/:id",deleteExpense)
export default route;
// 6a733b9edb01743708f69ed0