import { UserController } from '../users/user.controller';
import { ServicesFactory } from './ServicesFactory';

export interface Controllers {
  userController: UserController;
}

export class ControllersFacotry {
  public readonly controllers: Controllers;

  constructor(private readonly servicesFactory: ServicesFactory) {
    const userController = new UserController(
      this.servicesFactory.services.userService,
    );

    this.controllers = {
      userController,
    };
  }
}
