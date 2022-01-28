import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryKey()
  userId: number;

  @Property({ type: 'text' })
  username!: string;

  @Property({ type: 'text '})
  @Exclude()
  password!: string;

  @Property()
  @Exclude()
  createdAt = new Date();

  constructor(username: string) {
    this.username = username;
  }
}
