import User from '../entities/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import AppDataSource from '@shared/infra/typeorm/data-source';

const ormRepository = AppDataSource.getRepository(User);

const UsersRepository = ormRepository.extend({
  async findById(id: string): Promise<User | undefined> {
    const findUser = await this.findOne({
      where: { id },
    });

    return findUser || undefined;
  },

  async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.findOne({
      where: { email },
    });

    return findUser || undefined;
  },

  async create(data: ICreateUserDTO): Promise<User> {
    const user = ormRepository.create(data);

    return ormRepository.save(user);
  },

  async save(user: User): Promise<User> {
    return ormRepository.save(user);
  },
}) satisfies IUsersRepository;

export default UsersRepository;
