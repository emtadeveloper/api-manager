import { createParamDecorator, ExecutionContext } from "@nestjs/common";

import { paginationSolver } from "../utils/pagination.util";

export const Pagination = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<{ query: { page?: string; limit?: string } }>();
  return paginationSolver(Number(request.query.page), Number(request.query.limit));
});
