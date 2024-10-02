import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { PrismaServiceMock } from './mocks/prisma-service.mock';


describe('BooksService', () => {
  let service: BooksService;
  let prismaServiceMock: PrismaServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService, PrismaServiceMock],
    }).compile();

    service = module.get<BooksService>(BooksService);
    prismaServiceMock = module.get<PrismaServiceMock>(PrismaServiceMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prismaServiceMock).toBeDefined();
  });
});
