import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProduct(){
     return this.appService.getProducts()
  }

  @Post()
  async insertProduct(@Body('name')name:string,@Body('category')catg:string,@Body('price')price:number){
      let id = await this.appService.insertProducts(name,catg,price)
      return {"id":id}
  }

  @Get(':id')
    getProductById(@Param('id') id : number){
      return this.appService.getProductById(id)
   } 
   @Patch(':id')
   updateProduct(@Param('id') id:number,@Body('name')name:string,@Body('category')catg:string,@Body('price')price:number){
    return this.appService.updateProduct(id,name,catg,price) 
   }
   @Delete(':id')
   deleteProduct(@Param('id') id){
    return this.appService.deleteProduct(id) 
   }
}
