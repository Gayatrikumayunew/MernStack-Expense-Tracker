import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import route from './routes/expenseRoute.js'
import incomeroute from './routes/incomeRoute.js'
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send()
})
app.use(cors());
dotenv.config();
app.use("/api",route)
app.use("/api/income",incomeroute)

const PORT= process.env.PORT || 4000;
const MONGOURL=process.env.MONGO_URI;

mongoose.connect(MONGOURL).then(()=>{
    console.log("databse connected");
    app.listen(PORT, ()=>{
        console.log(`server is running on http://localhost:${PORT}`)
        

    });
}).catch((err)=>{
    console.log(err)
})

//route managemnet
