import mongoose from "mongoose";

const expenseSchema =new mongoose.Schema(
    {
    title:{
        type:String,
        required:true

    },
amount:{
    type:Number,
    required:true
},
category:{
    type:String,
    required:true,
    enum:[
        "Food",
        "Travel",
        "Shopping",
        "Bills",
        "Entertainment",
        "Health",
        "Education",
        "Others"
    ]
},
date:{
    type:Date,
    default:Date.now
},
description:{
    type:String
},

    
    


},
{
   timestamps:true, 
});
export default mongoose.model("Expense",expenseSchema)