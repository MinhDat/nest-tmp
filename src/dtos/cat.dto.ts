import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class CreateCatDto {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  age: number;

  @Field()
  breed: string;
}
