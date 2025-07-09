import { InjectConnection } from 'nestjs-knex'
import { Knex } from 'knex'
import { Injectable } from '@nestjs/common'
import { DatabaseOperations } from './db.interface'

@Injectable()
export class KnexAdapter implements DatabaseOperations<Knex> {
  public constructor(@InjectConnection() public readonly knex: Knex) {}

  public queryBuilder(): Knex {
    return this.knex
  }
}
