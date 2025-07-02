import { AppEntity } from '../app.entity'
import { CryptoEncryptedValue } from '../crypto/dto/crypto.dto'

export class UserEntity extends AppEntity {
  public static readonly Table = 'users'

  public constructor(
    public readonly username: string,
    public readonly credential: CryptoEncryptedValue,
    public readonly scopes: string[],
    public readonly role?: 'ADMIN' | 'CLIENT'
  ) {
    super()
  }
}
