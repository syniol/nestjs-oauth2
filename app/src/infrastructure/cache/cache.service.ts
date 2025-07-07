import { CacheClientOperations } from './cache.interface'
import { RedisAdapter } from './redis.adapter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CacheService implements CacheClientOperations {
  private readonly adaptedClient: CacheClientOperations

  public constructor() {
    this.adaptedClient = new RedisAdapter()
  }

  public async set<ValueType>(key: string, value: ValueType): Promise<void> {
    await this.adaptedClient.set(key, value)
  }

  public async get<ValueType>(key: string): Promise<ValueType> {
    return this.adaptedClient.get(key)
  }
}
