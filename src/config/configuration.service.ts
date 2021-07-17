import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigurationService {
  constructor(private config: ConfigService) {}
  get url(): string {
    return this.config.get<string>('config.url');
  }

  get port(): number {
    return Number(this.config.get<number>('config.port'));
  }

  get environment(): string {
    return this.config.get<string>('config.env');
  }

  get database(): TypeOrmModuleOptions {
    return this.config.get<TypeOrmModuleOptions>('config.database.pg');
  }
}
