import { CatsService } from './cats/services/cats.service';
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  @Get()
  getHello() {
    return 'hello word';
  }
  /*  
  @Get('hello')
  getHello(
    @Req() req: Request,
    @Body() body,
    @Param() param: { id: string; name: string },
  ): string {
    console.log(param);
    return this.appService.getHello();
  }
  */
}
