import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello-world')
  getHelloWorld(): string {
    return this.appService.getHelloWorld();
  }

  @Post('/hello')
  postHello(@Body('name') userName: string) {
    return this.appService.sayWelocmeToUser(userName);
  }
}
