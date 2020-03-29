import GraphQLJSON from 'graphql-type-json'
import { InputType, Field } from 'type-graphql';
import { prop as Property, Typegoose } from "@typegoose/typegoose";

@InputType()
export class EntityInput extends Typegoose {
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