import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    PostsModule,
  ],
})
export class AppModule {}
