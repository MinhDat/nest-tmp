import { Module } from '@nestjs/common';
import { CatResolver } from '../resolvers/cat.resolver';
import { CatService } from '../services/cat.service';

@Module({
  providers: [CatService, CatResolver],
})
export class CatModule {}
