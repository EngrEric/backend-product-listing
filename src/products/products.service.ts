import { Inject, Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ALL_CONSTANTS } from 'src/db/constants';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(ALL_CONSTANTS.PRODUCT_REPOSITORY)
    private productRepository: Repository<Product>,
  ) {}
  async create(createProductInput: CreateProductInput) {
    try {
      const result = await this.productRepository.save(createProductInput);
      console.log(result);
      return result;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const result = await this.productRepository.find();
      return result;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.productRepository.findOneBy({ id });
      return result;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateProductInput: UpdateProductInput) {
    try {
      const result = await this.productRepository.update(
        id,
        updateProductInput,
      );
      return result;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      const result = await this.productRepository.delete({ id });
      return result;
    } catch (error) {
      return error;
    }
  }
}
