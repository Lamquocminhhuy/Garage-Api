import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Role from './roles.enum';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

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

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Guest,
  })
  public role: Role;
}

export default User;
