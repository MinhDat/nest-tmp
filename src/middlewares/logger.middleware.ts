import { Logger } from '@nestjs/common';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

export const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next(); // Get each value of schema

  Logger.log(value, 'LoggerValue');
  return value;
};
