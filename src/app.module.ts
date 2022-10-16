import { join } from 'path';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { CatModule } from './modules/cat.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import graphqlConfig from './configs/graphql.config';

@Module({
  imports: [
    CatModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [
        ConfigModule.forRoot({ load: [graphqlConfig], isGlobal: true }),
      ],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: join(
          process.cwd(),
          configService.get('graphql.schemaPath'),
        ),
        buildSchemaOptions: {
          fieldMiddleware: [loggerMiddleware],
        },
        path: configService.get('graphql.routePath'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private routePath: any;

  constructor(configService: ConfigService) {
    this.routePath = configService.get('graphql.routePath');
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(this.routePath);
  }
}
