import { Typegoose } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
export declare class Entity extends Typegoose {
    readonly _id: ObjectId;
    name?: string;
}
export declare const EntityModel: () => any;
