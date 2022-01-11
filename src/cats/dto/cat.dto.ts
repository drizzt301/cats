import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: '3280199',
    description: 'id',
    required: true,
  })
  id: string;

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
}
