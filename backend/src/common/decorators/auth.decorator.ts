import { applyDecorators, createParamDecorator, ExecutionContext, SetMetadata, UseGuards } from "@nestjs/common";
import type { Type } from "@nestjs/common";
import type { AuthenticatedRequest } from "../../module/auth/auth.types";

export const CurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
  return request.user;
});

export const Roles = (...roles: string[]) => SetMetadata("roles", roles);

export const Auth = (...guards: Array<Type<unknown>>) => applyDecorators(UseGuards(...guards));
