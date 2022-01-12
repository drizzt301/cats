import { PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class CatRequestDto extends PickType(Cat, [
  'email',
  'name',
  'password',
] as const) {}

/*
  @ApiProperty({
    example: 'yomicky02@kakao.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '1234',
    description: 'password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'yomicky',
    description: 'name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  */
