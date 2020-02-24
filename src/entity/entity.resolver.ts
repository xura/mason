import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Entity } from './entity.model';
import { EntityService } from './entity.service';
import { EntityInput } from './entity.input';

@Resolver(of => Entity)
export class EntityResolver {
  constructor(private readonly entityService: EntityService) { }

  @Query(() => [Entity])
  async entities(): Promise<Entity[]> {
    return this.entityService.findAll();
  }

  @Query()
  async findByName(@Args("name") name: string): Promise<Entity[]> {
    return this.entityService.findByName(name);
  }

  @Mutation(() => Entity)
  async createEntity(@Args('input') input: EntityInput): Promise<EntityInput> {
    return this.entityService.create(input);
  }
}