import { Injectable } from '@nestjs/common'
import {createECDH, randomBytes, createCipheriv, createDecipheriv } from 'node:crypto'

@Injectable()
export class CryptoService {
  //  secp521r1
  private static readonly EllipticCurve = 'prime192v1'
  private static readonly EncryptionAlgorithm = 'aes-256-ctr'
  private static readonly EncryptionDefaultByteSize = 16

  public async encrypt(plaintext: string): Promise<{ iv, key, content: string}> {
    const ecdh = createECDH(CryptoService.EllipticCurve);
    const clientKey = ecdh.generateKeys();
    const clientSecret = ecdh.computeSecret(clientKey);

    return this.encryptPlaintextWithSharedSecretKey(
      plaintext,
      clientSecret.toString('base64'),
    );
  }

  public decrypt(hash , secretKey): Promise<string> {
    const decipher = createDecipheriv(
      CryptoService.EncryptionAlgorithm,
      secretKey,
      Buffer.from(hash.iv, 'hex'),
    );

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(hash.content, 'base64')),
      decipher.final()
    ]);

    return Promise.resolve(decrypted.toString());
  }

  private async encryptPlaintextWithSharedSecretKey( text , secretKey ): Promise<{ iv, key, content: string}> {
    const iv = randomBytes(CryptoService.EncryptionDefaultByteSize);
    const cipher = createCipheriv(CryptoService.EncryptionAlgorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return Promise.resolve({
      iv: iv.toString('hex'),
      content: encrypted.toString('base64'),
      key: secretKey
    })
  }
}
