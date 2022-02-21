import { UserService } from '../users/user.service';

interface Services {
  userService: UserService;
}

export class ServicesFactory {
  public readonly services: Services;

  constructor() {
    // const userRepository = getCustomRepository(UserRepository);

    const userService = new UserService({} as any);

    this.services = {
      userService,
    };
  }
}
