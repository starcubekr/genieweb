import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }

  @Get("/book/:id")
  getBookInfo(@Param("id") bookid: string): Promise<string> {
    return this.apiService.getBookInfo(bookid);
  }
}
