import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AirlineModule } from './airline/airline.module';
import { FlightModule } from './flight/flight.module';
import { ReservationModule } from './reservation/reservation.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    UsersModule,
    AirlineModule,
    FlightModule,
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
