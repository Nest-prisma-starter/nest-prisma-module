import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService){}
  create(createPostDto: Prisma.PostCreateInput) {
    return this.prismaService.post.create({data: createPostDto});
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: number) {
    return this.prismaService.post.findUnique({where: {id: id}});
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prismaService.post.update({where: {id}, data:updatePostDto})
  }

  remove(id: number) {
    return this.prismaService.post.delete({where: {id: id}});
  }
}
