import { CryptoService } from './crypto.service'

describe('Crypto Service Test', () => {
  it('should encrypt successfully', async () => {
    const sut = new CryptoService()
    await expect(sut.encrypt('Syniol Limited')).resolves.toEqual(expect.objectContaining({
      content: expect.any(String),
      iv: expect.any(String),
      key: expect.any(String),
    }))

    const sss = await sut.encrypt('Syniol Limited')
    await expect(sut.decrypt(sss, sss.key)).resolves.toEqual('Syniol Limited')
  })

  it('should decrypt the encrypted value successfully', async () => {
    const sut = new CryptoService()

    const encryptedResult = await sut.encrypt('Syniol Limited')
    await expect(sut.decrypt(encryptedResult, encryptedResult.key)).resolves.toEqual('Syniol Limited')
  })
})
