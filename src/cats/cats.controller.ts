import { AuthService } from './../auth/auth.service';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { CatsService } from './cats.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyCatDto } from './dto/cat.dto';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
//import { PositiveIntPipe } from 'src/common/pipes/positiveint.pipe';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '성공!',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return 'logout';
  }
  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}

/* -- 이전 컨트롤러 소스
  @Get() // cats/
  getAllCat() {
    //throw new HttpException('api is broken', 401);
    console.log('hello controller');
    return { cats: 'get all cat api' };
  }
  @Get(':id') // cats//:id
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }
  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'updatePatial cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
*/

/* -- Express 컨트롤러 소스
    router.get('/cats', readAllcat);
    router.get('/cats/:id', readCat);
    router.post('/cats', createCat);
    router.put('/cats/:id', updateCat);
    router.patch('/cats/:id', updatePartialCat);
    router.delete('/cats/:id', deleteCat);
  */
