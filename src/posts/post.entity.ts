import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Exclude } from 'class-transformer';
import type { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryKey()
  postId: number;

  @Property({ type: 'text' })
  content!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  @Exclude()
  updatedAt = new Date();

  @ManyToMany()
  assignees = new Collection<User>(this);

  constructor(content: string ) {
    this.content = content;
  }
}
