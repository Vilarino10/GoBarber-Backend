import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return response.json(userWithoutPassword);

    return response.json(user);
  } catch (err) {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response
      .status(400)
      .json({ error: 'This appointment is already booked' });
  }
});

export default usersRouter;
