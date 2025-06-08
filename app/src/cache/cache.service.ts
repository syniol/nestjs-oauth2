import { Injectable, NotImplementedException } from '@nestjs/common'

@Injectable()
export class CacheService {
  public async set(key, value: string): Promise<void> {
    throw new NotImplementedException()
  }

  public async get(key): Promise<string> {
    throw new NotImplementedException()
  }
}
