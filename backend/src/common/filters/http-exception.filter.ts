import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import type { Request, Response } from "express";

@Catch()
export class HttpExceptionResponseFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest<Request>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionResponse = exception instanceof HttpException ? exception.getResponse() : undefined;
    const message = typeof exceptionResponse === "string" ? exceptionResponse : "خطای داخلی سرور";
    const errors = typeof exceptionResponse === "object" && exceptionResponse !== null && "message" in exceptionResponse
      ? (exceptionResponse as { message?: unknown }).message
      : undefined;

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      errors: Array.isArray(errors) ? errors : undefined,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
