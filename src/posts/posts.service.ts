import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: EntityRepository<Post>,
  ) {}

  async create() {
    const post = new Post();
    await this.postRepository.persistAndFlush(post);
    return post;
  }

  async findAll() {
    return await this.postRepository.findAll({ populate: ['assignees'] });
  }

  async remove(postId: number) {
    const post = await this.postRepository.findOneOrFail({ postId });
    await this.postRepository.removeAndFlush(post);
  }
}
