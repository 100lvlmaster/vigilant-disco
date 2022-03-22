import { UserEntity } from "../entity/user.entity";
import { Repository, getRepository } from "typeorm";
import { RegisterUserDto } from "../dto/register.dto";
import { UpdateUserDto } from "../dto/user.input.dto";

export class UserController {
  private readonly userRepository: Repository<UserEntity>;
  ///
  constructor() {
    this.userRepository = getRepository(UserEntity);
  }
  ///
  public async deleteUser(id: string) {
    const userExists = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!userExists) {
      return undefined;
    }
    return this.userRepository.delete(id);
  }
  ///
  public async updateUser(user: UpdateUserDto) {
    const userExists = await this.userRepository.findOne({
      where: { id: user.id },
    });
    if (!userExists) {
      return undefined;
    }
    return userExists;
  }
  ///
  public async createUser(user: RegisterUserDto) {
    return await this.userRepository.save(user);
  }
}
