import express from 'express'
import {addincome,getincome} from '../controller/incomeController.js'
const route=express.Router();
route.post("/addincome",addincome);
route.get("/getincome",getincome)
export default route;