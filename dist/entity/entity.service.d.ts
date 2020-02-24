import { Entity } from "./entity.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { EntityInput } from "./entity.input";
export declare class EntityService {
    private readonly entityModel;
    constructor(entityModel: ReturnModelType<typeof Entity>);
    create(createEntity: EntityInput): Promise<Entity>;
    findAll(): Promise<Entity[] | null>;
    findByName(name: string): Promise<Entity[] | null>;
}
