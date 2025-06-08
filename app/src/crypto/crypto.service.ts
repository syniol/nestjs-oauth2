import { Injectable, NotImplementedException } from '@nestjs/common'

@Injectable()
export class CryptoService {
  public encrypt(plaintext: string): string {
    throw new NotImplementedException()
  }

  public decrypt(encrypted: string): string {
    throw new NotImplementedException()
  }
}
