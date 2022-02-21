import { User } from './user.model';
import { UserRepository } from './user.repository';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne(id) as unknown as User;
  }
}
