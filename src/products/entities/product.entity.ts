import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { nullable: true })
  id: string;

  @Column()
  @Field()
  imgUrl: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  price: string;

  @Column()
  @Field()
  shortDescription: string;

  @Column()
  @Field()
  longDescription: string;

  @Column()
  @Field(() => Int)
  rating: number;

  @Column()
  @Field()
  brand: string;

  @Column({ type: 'json' })
  @Field()
  options: string;

  @Column({ type: 'json' })
  @Field()
  sizes: string;
}
