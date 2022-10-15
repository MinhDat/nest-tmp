import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { CatModel } from 'src/models/cat.model';
import { CreateCatDto } from '../dtos/cat.dto';

@Injectable()
export class CatService {
  private readonly cats: CatModel[] = [];

  create(cat: CreateCatDto) {
    const item = new CatModel();
    item.id = uuidv4();
    item.name = cat.name;
    item.age = cat.age;
    item.breed = cat.breed;

    this.cats.push(item);
    return item;
  }

  findAll(): CatModel[] {
    return this.cats;
  }
}
