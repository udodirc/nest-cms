import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
    imports: [AuthModule, CqrsModule],
    providers: [],
    controllers: [],
  })
  export class AuthModule {}