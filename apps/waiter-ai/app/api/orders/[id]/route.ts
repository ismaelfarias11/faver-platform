export const runtime = "nodejs";

import { getOrderById, updateOrderStatus, type OrderStatus } from "../_store";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, ctx: Ctx) {
  const { id } = await ctx.params;

  const order = getOrderById(id);
  if (!order) return new Response("Not found", { status: 404 });

  return Response.json({ order });
}

export async function PATCH(req: Request, ctx: Ctx) {
  const { id } = await ctx.params;

  const body = (await req.json()) as { status?: OrderStatus };
  if (!body.status) return new Response("Bad Request", { status: 400 });

  const order = updateOrderStatus(id, body.status);
  if (!order) return new Response("Not found", { status: 404 });

  return Response.json({ order });
}
