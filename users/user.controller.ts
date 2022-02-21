import { User } from './user.model';
import { UserService } from './user.service';

export class UserController {
  constructor(private userService: UserService) {}

  public async getUserById(id: number): Promise<User> {
    return this.userService.getUserById(id);
  }
}
