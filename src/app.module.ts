import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EntityModule } from './entity/entity.module';
import { TypegooseModule } from 'nestjs-typegoose';


@Module({
  imports: [
    TypegooseModule.forRoot(
      "mongodb://localhost:27017/mason"
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    EntityModule,
  ]
})
export class AppModule { }
