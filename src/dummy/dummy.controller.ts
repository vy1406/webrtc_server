import { Controller, Get } from '@nestjs/common';

@Controller('dummy')
export class DummyController {
  @Get()
  getDummy(): string {
    return 'This is a dummy route!';
  }
}
