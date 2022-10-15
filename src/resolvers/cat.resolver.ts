import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCatDto } from '../dtos/cat.dto';
import { CatModel } from '../models/cat.model';
import { CatService } from '../services/cat.service';

@Resolver(of => CatModel)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(returns => [CatModel])
  cats(): CatModel[] {
    return this.catService.findAll();
  }

  @Mutation(returns => CatModel)
  addCat(@Args('newCatData') newCatData: CreateCatDto): CatModel {
    return this.catService.create(newCatData);
  }
}
