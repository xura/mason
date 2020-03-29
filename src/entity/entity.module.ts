import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityResolver } from './entity.resolver';
import { TypegooseModule } from "nestjs-typegoose";
import { Entity } from './entity.model';

@Module({
  imports: [
    TypegooseModule.forFeature([Entity])
  ],
  providers: [EntityService, EntityResolver]
})
export class EntityModule { }
