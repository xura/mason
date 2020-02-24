import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityResolver } from './entity.resolver';
import { TypegooseModule } from "nestjs-typegoose";
import { Entity } from './entity.model';
import { EntityInput } from './entity.input';

@Module({
  imports: [
    TypegooseModule.forFeature([Entity])
  ],
  providers: [EntityService, EntityResolver]
})
export class EntityModule { }
