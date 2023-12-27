import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { productProviders } from './product.providers';
import { DatabaseModule } from 'src/db/db.module';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders, ProductsResolver, ProductsService],
})
export class ProductsModule {}
