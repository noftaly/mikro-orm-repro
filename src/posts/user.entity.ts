import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  userId: number;

  @Property({ type: 'text' })
  username!: string;

  constructor(username: string) {
    this.username = username;
  }
}
