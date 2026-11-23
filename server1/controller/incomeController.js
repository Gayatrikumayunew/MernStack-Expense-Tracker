import Income from "../model/incomeModel.js";
//create income
const addincome=async(req,res)=>{
    try{
        const income= new Income(req.body);
        await income.save();
        res.status(200).json({
            message:"Income added successfully"
        })

    }catch(er){
        res.status(400).json({errorMessage:er.message});
    }
}
//get income
const getincome=async(req,res)=>{
    try{
        const income=await Income.find();
        res.status(200).json(income);

    }catch(er){
        res.status(400).json({
            errorMessage:er.message
        })
    }
}
export{addincome,getincome}