import { Entity } from './entity.model';
import { EntityService } from './entity.service';
import { EntityInput } from './entity.input';
export declare class EntityResolver {
    private readonly entityService;
    constructor(entityService: EntityService);
    entities(): Promise<Entity[]>;
    findByName(name: string): Promise<Entity[]>;
    createEntity(input: EntityInput): Promise<EntityInput>;
}
