import { SignOptions } from 'jsonwebtoken';

interface AuthConfig {
  jwt: {
    secret: 'd9eb35cd611f5f4bfeebd74d6468ee0d';
    expiresIn: NonNullable<SignOptions['expiresIn']>;
  };
}

const authConfig: AuthConfig = {
  jwt: {
    secret: 'd9eb35cd611f5f4bfeebd74d6468ee0d',
    expiresIn: '1d',
  },
};

export default authConfig;
