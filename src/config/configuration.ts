import { registerAs } from '@nestjs/config';
import { Users } from 'src/users/data-access/pg';

export default registerAs('config', () => ({
  url: process.env.URL,
  port: process.env.PORT,
  env: process.env.ENV,
  database: {
    pg: {
      type: process.env.DATABASE_DRIVER,
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE,
      password: process.env.DATABASE_PASSWORD,
      synchronize: process.env.ENV === 'development',
      //entities: ['dist/**/*.entity{.ts,.js}', 'dist/**/*.orm{.ts,.js}'],
      entities: [Users]
    },
  },
}));
