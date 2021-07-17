import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { DataAccess } from './data-access';

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature(DataAccess)],
    providers: [],
    controllers: [],
  })
  export class UsersModule {}