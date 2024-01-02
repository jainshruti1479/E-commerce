import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product';
import { ProductsController } from './products/products.controller';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://jainshruti1479:W2hpfDUOk08UJP72@nest-cluster.l4zvtax.mongodb.net/nest-tutorial?retryWrites=true&w=majority'),MongooseModule.forFeature([{name:'products',schema:ProductSchema}])],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
