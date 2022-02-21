import { Router } from 'express';
import { ControllersFacotry } from '../server/ControllersFactory';
import { USER_ROUTE_MODIFIERS } from './routeConstatns';
import { UserRouter } from './user.router';

export class RoutersManager {
  public readonly router: Router;

  constructor(private controllersFacotry: ControllersFacotry) {
    const routersManager = Router();

    const userRouter = new UserRouter(
      this.controllersFacotry.controllers.userController,
    ).router;

    routersManager.use(USER_ROUTE_MODIFIERS.USER, userRouter);

    this.router = routersManager;
  }
}
