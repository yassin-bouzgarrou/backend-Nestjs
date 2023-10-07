import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { authdto } from './dto/auth.dto';
import * as argon2 from 'argon2';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prismService: PrismaService) {}

  async singup(users: authdto) {
    try {
      const hash = await argon2.hash(users.password);
      const saved = await this.prismService.user.create({
        data: {
          email: users.email,
          username: users.username,
          password: hash,
          role: 'GUEST',
        },
      });
      delete saved.password;
      return saved;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('username or email already used');
        }
      }
    }
  }

  async singnin(user: authdto) {
    const finduser = await this.prismService.user.findFirst({
      where: {
        email: user.email,
      },
    });


    if (!finduser) {
      throw new ForbiddenException('your email not valid ');
    }
    const password = await argon2.verify(finduser.password, user.password);

    if (!password) {
      throw new ForbiddenException('your passworrd not valid ');
    } else {
      return {
        finduser
      }
    }
  }
}
