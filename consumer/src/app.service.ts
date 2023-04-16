import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor (
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getData() {
    return 'Прилетел бизнес-план из микросервиса'
  }
}
