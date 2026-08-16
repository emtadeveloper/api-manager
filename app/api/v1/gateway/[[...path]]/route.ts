"use server";
import { NextRequest } from "next/server";
import { executeGatewayRequest } from "@/lib/api-manager/executor";

export async function GET(
  req: NextRequest,
  {params}: {params: Promise<{ path?: string[] }>},
) {
  const { path } = await params;
   return await executeGatewayRequest(req, path);
}

export async function POST(req: NextRequest,
  {params}: {params: Promise<{ path?: string[] }>},
) {
  const { path } = await params;
  return await executeGatewayRequest(req, path);
}

export async function PUT(req: NextRequest) {
  return executeGatewayRequest(req);
}

export async function DELETE(req: NextRequest) {
  return executeGatewayRequest(req);
}

export async function PATCH(req: NextRequest) {
  return executeGatewayRequest(req);
}
