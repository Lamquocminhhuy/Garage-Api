import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Airline {
  @PrimaryGeneratedColumn()
  public id: number;
  
  @Column()
  public no_of_seats: number;
  


}

export default Airline;
