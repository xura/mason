import { InputType, Field, Int } from 'type-graphql';
import { prop as Property, Typegoose } from "@typegoose/typegoose";


@InputType()
export class EntityInput extends Typegoose {
    @Field()
    @Property()
    name?: string;
}