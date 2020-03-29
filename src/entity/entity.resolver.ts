import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Entity } from './entity.model';
import { EntityService } from './entity.service';
import { EntityInput } from './entity.input';

@Resolver(() => Entity)
export class EntityResolver {
  constructor(private readonly entityService: EntityService) { }

  @Query(() => [Entity])
  async entities(): Promise<Entity[]> {
    return this.entityService.findAll();
  }

  @Query(() => [Entity])
  async entitiesByType(@Args("Type") type: number): Promise<Entity[]> {
    return this.entityService.findByType(type);
  }

  @Mutation(() => Entity)
  async createEntity(@Args('input') input: EntityInput): Promise<EntityInput> {
    return this.entityService.create(input);
  }
}