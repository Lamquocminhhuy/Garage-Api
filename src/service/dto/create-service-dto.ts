import { ApiProperty } from '@nestjs/swagger';

export class ServiceDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  time: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  garage: number;
}

export default ServiceDto;
