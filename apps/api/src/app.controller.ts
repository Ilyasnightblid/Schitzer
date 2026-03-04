import { Controller, Get } from '@nestjs/common';
import { greeting } from '@schitzer/shared';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return greeting('Schitzer API');
  }
}
