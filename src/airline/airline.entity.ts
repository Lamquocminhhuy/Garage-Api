import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Flight from '../flight/flight.entity';

@Entity()
class Airline {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public no_of_seats: number;

  @OneToMany(() => Flight, (flight: Flight) => flight.airline)
  public flights: Flight[];
}

export default Airline;
