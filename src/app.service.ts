import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Saad!';
  }
  getHelloWorld(): string {
    return 'Hello World!';
  }
  sayWelocmeToUser(userName: string): string {
    return `Welcome To ${userName}`;
  }
}
