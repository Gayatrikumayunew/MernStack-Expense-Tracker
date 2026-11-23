import mongoose from "mongoose";
const incomeSchema=new mongoose.Schema({
    source:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},
{
    timestamps:true
});
export default mongoose.model("Income",incomeSchema)