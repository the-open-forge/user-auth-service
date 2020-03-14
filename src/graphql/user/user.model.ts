import {Entity, Column, BaseEntity, PrimaryGeneratedColumn} from 'typeorm';
import {ObjectType, Field, ID} from 'type-graphql';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number,

  @Column()
  firstname: string,
}