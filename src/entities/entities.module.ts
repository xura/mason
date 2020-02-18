import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesResolver } from './entities.resolver';

@Module({
  providers: [EntitiesService, EntitiesResolver]
})
export class EntitiesModule {}
