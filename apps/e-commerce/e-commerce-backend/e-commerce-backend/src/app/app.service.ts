import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('products') private ProductModel:Model<Product>){}

  async findProduct(id:number){
    let result 
    try{
      result= await this.ProductModel.findById(id)
    }
    catch{
      throw new NotFoundException("Product doesn't exist")
    }
    return result
  }

  async insertProducts(name:string,catg:string,price:number){
      const newProduct = new this.ProductModel({
          name,
          category:catg,
          price
      })
      const result = await newProduct.save()
      return result.id as string
  }

  async getProducts(){
      let result = await this.ProductModel.find()
      return result
  }

  async getProductById(id:number){
    let res = this.findProduct(id)
    return res
  }

  async updateProduct(id:number,name:string,catg:string,price:number){
    let product = await this.findProduct(id)
    if(name){
      product.name = name
    }
    if(catg){
      product.category = catg
    }
    if(price){
      product.price = price
    }
    let result = product.save()
  return result
  }

  async deleteProduct(id:number){
    let res = this.ProductModel.deleteOne({_id:id})
    return res
  }

}
