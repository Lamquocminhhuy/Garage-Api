import { IsDateString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

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
}

export default User;
