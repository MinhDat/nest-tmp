import {
  Injectable,
  Logger,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // TODO: Apply authorization
    if (req.headers['authorization'] === 'INVALID_TOKEN') {
      Logger.log('authorization', req.headers['authorization']);
      throw new UnauthorizedException();
    }
    next();
  }
}
