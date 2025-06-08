import { AppEntity } from '../app.entity'

export class UserEntity extends AppEntity {
  public readonly username: string;
  public readonly encryptedPassword: string;
  public readonly scopes: string[];
}
