import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true}
})
export interface Product{
    _id:string;
    name:string;
    category:string;
    price:number;
}