import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BbcDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
