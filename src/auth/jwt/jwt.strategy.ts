import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CatsRepository } from 'src/cats/cats.repository';
// import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret', //process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }

  // async validate(payload: Payload) {
  //     const cat = await this.catsRepository.findCatByIdWithoutPassword(
  //       payload.sub,
  //     );
  //     if (cat) {
  //       return cat; // request.user
  //     } else {
  //       throw new UnauthorizedException('접근 오류');
  //     }
  // }
}
