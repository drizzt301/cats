import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '3280199',
    description: 'id',
    required: true,
  })
  id: string;
}

/*
  @ApiProperty({
    example: 'yomicky02@kakao.com',
    description: 'email',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'yomicky',
    description: 'name',
    required: true,
  })
  name: string;
*/
