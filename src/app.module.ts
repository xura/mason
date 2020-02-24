import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { EntityModule } from './entity/entity.module';
import { TypegooseModule } from 'nestjs-typegoose';


@Module({
  imports: [
    TypegooseModule.forRoot(
      "mongodb://localhost:27017/mason"
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    EntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
