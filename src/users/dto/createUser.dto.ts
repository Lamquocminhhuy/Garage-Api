import { IsDateString, IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;

  firstName: string;

  lastName: string;

  gender: string;

  phoneNumber: string;

  
}

export default CreateUserDto;
