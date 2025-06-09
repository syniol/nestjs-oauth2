import { AppEntity } from '../app.entity'

export class UserEntity extends AppEntity {
  public static readonly Table = 'users'

  public constructor(
    public readonly username: string,
    public readonly encrypted_password: string,
    public readonly scopes: string[],
  ) {
    super()
  }
}
