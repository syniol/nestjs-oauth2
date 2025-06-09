import { randomUUID, UUID } from 'node:crypto'

export abstract class AppEntity {
  public readonly id: number
  public readonly internal_id: UUID
  public readonly created_date: Date
  public readonly updated_date: Date

  protected constructor() {
    this.internal_id = randomUUID()
  }
}
