import { UserEntity } from "../entity/user.entity";
import { getRepository, Repository } from "typeorm";
import { RegisterUserDto } from "../dto/register.dto";
export class AuthController {
  private readonly userRepository: Repository<UserEntity>;
  ///
  constructor() {
    this.userRepository = getRepository(UserEntity);
  }
  ///
  public async registerUser(user: RegisterUserDto) {
    return await this.userRepository.save(user);
  }
  ///
  public async loginUser(
    user: RegisterUserDto
  ): Promise<UserEntity | undefined> {
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email },
    });
    return existingUser;
  }
}
