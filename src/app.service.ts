import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { msg: 'Hello, This is test Message', btnText: 'Click me' };
  }
}
