import { ID, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatModel {
  @Field(type => ID)
  id: string;

  @Field()
  name?: string;

  @Field()
  age: number;

  @Field()
  breed: string;
}
