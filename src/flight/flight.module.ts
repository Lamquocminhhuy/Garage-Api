import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Flight from './flight.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Flight])],
  providers: [FlightService],
  controllers: [FlightController]
})
export class FlightModule {}
