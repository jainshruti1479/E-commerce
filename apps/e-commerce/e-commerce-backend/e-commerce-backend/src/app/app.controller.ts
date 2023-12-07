import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('productList')
  getData() {
    return this.appService.getData();
  }
  @Get(':id')
  getById(@Param('id') id:number) {
    return this.appService.getDataById(id);
  }
  // @Post()
  // createList(){
    
  // }
}
