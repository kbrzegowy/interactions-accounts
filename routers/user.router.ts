import { Router } from 'express';
import { UserController } from '../users/user.controller';
import { ROOT } from './routeConstatns';

export class UserRouter {
  public readonly router: Router;

  constructor(private userController: UserController) {
    const userRouter = Router();

    userRouter.get(ROOT, async (req, res) => {
      const id = 1;
      const result = await userController.getUserById(id);
      res.send(result);
    });

    this.router = userRouter;
  }
}
