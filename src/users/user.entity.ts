import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Reservation from '../reservation/reservation.entity';
import Role from './roles.enum';

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

  @ManyToMany(() => Reservation, (reservation: Reservation) => reservation.user)
  public reservation?: Reservation[];
}

export default User;
