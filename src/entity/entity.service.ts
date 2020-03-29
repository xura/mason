import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { Entity } from "./entity.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { EntityInput } from "./entity.input";

@Injectable()
export class EntityService {
    constructor(
        @InjectModel(Entity) private readonly entityModel: ReturnModelType<typeof Entity>
    ) { }

    async create(createEntity: EntityInput): Promise<Entity> {
        const createdEntity = new this.entityModel(createEntity);
        return await createdEntity.save();
    }

    async findAll(): Promise<Entity[] | null> {
        return await this.entityModel.find().exec();
    }

    async findByType(type: number): Promise<Entity[] | null> {
        return await this.entityModel.find({ Type: type }).exec();
    }
}