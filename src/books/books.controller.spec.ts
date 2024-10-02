import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { PrismaServiceMock } from './mocks/prisma-service.mock';

describe('BooksController', () => {
  let controller: BooksController;
  let prismaServiceMock: PrismaServiceMock

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService, PrismaServiceMock],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    prismaServiceMock = module.get<PrismaServiceMock>(PrismaServiceMock);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(prismaServiceMock).toBeDefined();
  });
});
