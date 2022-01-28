import { Module, OnModuleInit } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { InjectRepository, MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';
import { Post } from './post.entity';
import { EntityRepository } from '@mikro-orm/postgresql';

@Module({
  imports: [MikroOrmModule.forFeature([User, Post])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule implements OnModuleInit {
  constructor(
    @InjectRepository(User) private readonly userRepository: EntityRepository<User>,
  ) {}

  async onModuleInit() {
    const user = new User('John Doe');
    await this.userRepository.persistAndFlush(user).catch(() => {});
  }
}
