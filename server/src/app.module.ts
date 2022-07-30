import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ComponentsModule } from './Components/components.module';


@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground:true,
    debug:true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  }),
  ComponentsModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
