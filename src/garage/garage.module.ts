import { Module } from '@nestjs/common';
import { GarageService } from './garage.service';
import { GarageController } from './garage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Garage from './garage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Garage])],
  providers: [GarageService],
  controllers: [GarageController],
  exports: [GarageService]
})
export class GarageModule {}
