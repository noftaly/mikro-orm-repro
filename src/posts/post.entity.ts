import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import type { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryKey()
  postId: number;

  @Property({ type: 'text' })
  content!: string;

  @ManyToMany()
  assignees = new Collection<User>(this);

  constructor(content: string ) {
    this.content = content;
  }
}
