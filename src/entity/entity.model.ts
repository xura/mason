import GraphQLJSON from 'graphql-type-json'
import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, Typegoose } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Entity extends Typegoose {
    @Field(() => ID)
    readonly _id: ObjectId;

    @Field()
    @Property()
    Type: number;

    @Field(() => GraphQLJSON)
    @Property()
    Fields: GraphQLJSON;

    @Field()
    @Property()
    DateCreated: Date;

    @Field()
    @Property()
    DateUpdated: Date;
}

export const EntityModel = new Entity().getModelForClass(Entity);