import { Exclude } from 'class-transformer';
import { IsNotEmpty, Matches } from 'class-validator';
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Role from './roles.enum';
import { ApiProperty } from '@nestjs/swagger';
import Reservation from '../reservation/reservation.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  
  @Column()
  public password: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public gender: string;

  @Column()
  public phoneNumber: string;

  @ManyToMany(() => Reservation, (reservation: Reservation) => reservation.user)
  public reservation?: Reservation[];

}

export default User;
