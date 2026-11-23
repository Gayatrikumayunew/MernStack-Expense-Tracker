import Expense from "../model/expenseModel.js"
// create expense
export const create=async(req,res)=>{
    try{
const expense=new Expense(req.body);
await expense.save();// saving data
res.status(200).json({
    // success:true,
    // message:"Expense created successfully",
    // data:expense
    message:"Expense Added Successfully"
})
    }catch(err){
res.status(500).json({errorMessage:err.message})
    }
}
//read all expenses
export const getAllExpenses=async(req,res)=>{
    try{
        const expenseData=await Expense.find();
        if(!expenseData || expenseData.length===0){
            return res.status(404).json({message:"User data not found"});

        }
        res.status(200).json(expenseData)
    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}
// get expense by id

export const getExpenseById=async(req,res)=>{
    // console.log(req.param)

    try{
const id=req.params.id;
const expenseExist= await Expense.findById(id);
if(!expenseExist){
    return res.status(404).json({message:"Expense not found"});
}
res.status(200).json(expenseExist)
    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}
// update
export const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const expenseExist=await Expense.findById(id);
        if(!expenseExist){
            return res.status(404).json({message:"User not found"})
        }
       const updatedData= await Expense.findByIdAndUpdate(id,req.body,{
            new:true
        })
        // res.status(200).json(updatedData)
        res.status(200).json({message:"Expense Updated successfully"})

    }catch(error){
        res.status(500).json({errorMessage:error.message})

    }
};
export const deleteExpense=async(req,res)=>{
try{
    const id=req.params.id;
    const expenseExist=await Expense.findById(id);
    if(!expenseExist){
        return res.status(404).json({message:"Expense not found"});

    }
    await Expense.findByIdAndDelete(id);
    res.status(200).json({message:"Expense Deleted"})
}catch(error){
res.status(500).json({errorMessage:error.message})
    }
};

