import { UnauthorizedException } from '@nestjs/common';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

export const authMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next(); // Get each key of schema

  // TODO: Apply authorization
  if (ctx.context.req.headers['authorization'] === 'INVALID_TOKEN') {
    throw new UnauthorizedException();
  }
  return value;
};
