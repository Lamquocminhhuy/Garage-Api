import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Service from '../service/service.entity';

@Entity()
class Garage {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Service, (service: Service) => service.name)
  public services?: Service[];
}

export default Garage;
