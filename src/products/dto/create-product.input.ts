import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => ID, { description: 'The product Id', nullable: true })
  id?: string;

  @Field({ description: 'The image url' })
  imgUrl: string;

  @Field({ description: 'The product name' })
  name: string;

  @Field({ description: 'The product price' })
  price: string;

  @Field({ description: 'The product short description' })
  shortDescription: string;

  @Field({ description: 'The product long description' })
  longDescription: string;

  @Field(() => Int, { description: 'The product rating' })
  rating: number;

  @Field({ description: 'The product brand' })
  brand: string;

  @Field({ description: 'The options field of the product' })
  options: string;

  @Field({ description: 'The product sizes' })
  sizes: string;
}
