import { Exclude } from 'class-transformer';
import { IsNotEmpty, Matches } from 'class-validator';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Reservation from '../reservation/reservation.entity';
import Role from './roles.enum';
import { CrudValidationGroups } from "@nestjsx/crud";
import { ApiProperty } from '@nestjs/swagger';
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Exclude()
  @Column()
  public password: string;

  @Column()
  public address: string;

  @Column({ type: 'date' })
  public dayofbirth: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public gender: string;

  @Column()
  public phoneNumber: string;


  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Guest,
  })
  public role: Role;



  @IsNotEmpty()
  @Matches(/((09|03|07|08|05)+([0-9]{8})\b)/)
  @ManyToMany(() => Reservation, (reservation: Reservation) => reservation.user)
  public reservation?: Reservation[];
}

export default User;
