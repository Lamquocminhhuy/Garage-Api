import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AirlineModule } from './airline/airline.module';
import { FlightModule } from './flight/flight.module';
import { ReservationModule } from './reservation/reservation.module';
import { AppController } from './app.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import { PaypalModule } from './paypal/paypal.module';

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
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    UsersModule,
    AirlineModule,
    FlightModule,
    ReservationModule,
    AuthenticationModule,
    PaypalModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
