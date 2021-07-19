import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { DataAccess } from './data-access';
import { UsersInteractor } from './users.interactor';

import { UsersCommandController } from './users.command.controller';
import { UseCases } from './usecases';

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature(DataAccess)],
    providers: [...UseCases, UsersInteractor],
    controllers: [UsersCommandController],
  })
  export class UsersModule {}