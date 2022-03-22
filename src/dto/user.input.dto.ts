import { IsNotEmpty, IsNumber, IsString } from "class-validator";
///
export class DeleteUserDto {
  ///
  @IsNotEmpty()
  id: string;
}
///
export class UpdateUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
///
