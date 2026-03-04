import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
        PORT: Joi.number().port().default(3001),
        DATABASE_URL: Joi.string().uri({ scheme: ['postgres', 'postgresql'] }).required(),
      }),
      validationOptions: {
        abortEarly: false,
      },
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
