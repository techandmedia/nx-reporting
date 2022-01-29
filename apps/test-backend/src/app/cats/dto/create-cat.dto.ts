// import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
  //   @IsString()
  //   readonly name: string;

  //   @IsInt()
  //   readonly age: number;

  //   @IsString()
  //   readonly breed: string;
}
