import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtAuthService } from "./jwt-auth.service";
import type { AuthenticatedRequest } from "./auth.types";

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly auth: JwtAuthService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const token = request.cookies?.[JwtAuthService.getCookieName()];
    request.session = await this.auth.requireSession(token);
    request.user = {
      id: Number(request.session.id),
      username: request.session.username,
      firstName: request.session.name.split(" ")[0] ?? null,
      lastName: request.session.name.split(" ").slice(1).join(" ") || null,
    };
    return true;
  }
}
