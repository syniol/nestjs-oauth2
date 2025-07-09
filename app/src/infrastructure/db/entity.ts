import { randomUUID, UUID } from 'node:crypto'

export abstract class Entity {
  public readonly id: number
  public readonly internal_id: UUID
  public readonly created_at: Date
  public readonly updated_at: Date

  protected constructor() {
    // This handled by database when NULL is given `defaultTo(knex.raw('uuid_generate_v4()'))`
    this.internal_id = randomUUID()
  }
}
