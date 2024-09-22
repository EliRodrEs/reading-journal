import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [LibraryModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
