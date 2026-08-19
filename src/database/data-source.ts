import 'reflect-metadata';
import { DataSource } from 'typeorm';

import Appointment from '../models/Appointment';
import User from '../models/User';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack_gobarber',

  synchronize: false,
  logging: false,

  entities: [Appointment, User],
  migrations: ['./src/database/migrations/*.ts'],
});

export default AppDataSource;
