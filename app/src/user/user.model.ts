export class User {
  public constructor(
    public readonly username: string,
    public readonly encryptedPassword: string,
    public readonly scopes: string[],
  ) {}
}
