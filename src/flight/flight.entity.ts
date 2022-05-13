import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Flight {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'date', unique: true })
  public flight_deptr_date: string;

  @Column()
  public deptr_country: string;

  @Column()
  public dest_country: string;

  @Column({ type: 'time' })
  public deptr_time: string;


  @Column({ type: 'time' })
  public arrival_time: string;
}

export default Flight;
