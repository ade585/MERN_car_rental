import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east-06.cleardb.net',
      port: 3306,
      username: 'b804905095c658',
      password: '92f0b026',
      database: 'heroku_fff23362fb26883',
      entities: [__dirname + '/../**/**/entities/*{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection) {
      console.log('Connected to db');
    }
  }
}


