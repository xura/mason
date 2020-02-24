import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, Typegoose } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Entity extends Typegoose {
    @Field(() => ID)
    readonly _id: ObjectId;

    @Field()
    @Property()
    name?: string;
}

export const EntityModel = new Entity().getModelForClass(Entity);