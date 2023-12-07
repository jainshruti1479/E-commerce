import { Injectable } from '@nestjs/common';
import { Products } from './product';

@Injectable()
export class AppService {
  product:Products[] = [
    {id:1,name:'Watch',price:340},
    {id:2,name:'Bottle',price:340},
    {id:3,name:'Lunch Box',price:340},
    {id:4,name:'Books',price:340},
    {id:5,name:'Clothes',price:340},
  ] 
  getData(): Products[] {
    return this.product;
  }
  getDataById(id:number):Products{
    const product = this.product.find(x=> x.id==id)
    return product
  }
}
