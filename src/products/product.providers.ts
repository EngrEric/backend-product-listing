import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { ALL_CONSTANTS } from 'src/db/constants';

export const productProviders = [
  {
    provide: ALL_CONSTANTS.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: [ALL_CONSTANTS.DATA_SOURCE],
  },
];
