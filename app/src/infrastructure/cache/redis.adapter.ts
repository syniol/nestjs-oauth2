import { Logger } from '@nestjs/common'
import { createClient, RedisClientType } from '@redis/client'
import { CacheClientOperations, CacheStorageOption } from './cache.interface'
import { AuthToken } from '../../auth/auth.token'

export class RedisAdapter implements CacheClientOperations {
  private readonly logger: Logger = new Logger(RedisAdapter.name)
  private readonly client: RedisClientType
  private static isConnectionEstablished: boolean = false

  public constructor() {
    if (!RedisAdapter.isConnectionEstablished) {
      this.client = createClient({
        // url: 'redis://hadi:red33sPkswr1d@redis:6379',
        url: 'redis://redis:6379',
      }).on('error', (err: unknown) => {
        this.logger.error(err)
      })

      this.client
        .connect()
        .then(() => {
          RedisAdapter.isConnectionEstablished = true
          this.logger.log('successfully connected to the redis instance')
        })
        .catch((err: unknown) => {
          this.logger.error(err)
        })
    }
  }

  public async set<ValueType>(
    key: string,
    value: ValueType,
    opt?: CacheStorageOption,
  ): Promise<void> {
    if (opt?.ttl) {
      await this.client.setEx(
        key,
        AuthToken.TokenExpiryTimeInSeconds,
        value as Buffer,
      )

      return
    }

    await this.client.set(key, value as Buffer)
  }

  public async get<ValueType>(key: string): Promise<ValueType> {
    return (await this.client.get(key)) as ValueType
  }
}
