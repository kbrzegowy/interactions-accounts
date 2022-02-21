import 'reflect-metadata';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { User } from '../users/user.model';

interface Database {
  connect(): Promise<Connection>;
}

export const postgreSQLConfiguration = {
  type: 'postgres',
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User],
  synchronize: true,
  logging: false,
};

export class PostgreSQL implements Database {
  constructor(private readonly configuration: ConnectionOptions) {}

  async connect(): Promise<Connection> {
    try {
      return await createConnection(this.configuration as ConnectionOptions);
    } catch (error) {
      throw new Error('Connection to database failed');
    }
  }
}
