import { IsString, IsNotEmpty } from "class-validator";
export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
