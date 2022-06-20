import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import Service from '../service/service.entity';
 
  import User from '../users/user.entity';
  
  @Entity()
  class Reservation {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column({ type: 'date' })
    public r_date: string;

    @OneToMany(() => Service, (service: Service) => service.reservation)
    public service: Service[];
  
    @ManyToMany(() => User, (user: User) => user.reservation)
    @JoinTable()
    public user: User[];
  }
  
  export default Reservation;