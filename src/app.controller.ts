import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
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
  postHello(@Body('name') userName: string, @Req() req, @Res() res) {
    res.send(this.appService.sayWelocmeToUser(userName));
  }
}
