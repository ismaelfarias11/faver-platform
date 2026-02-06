import { addOrder, getOrders } from "./_store";

export async function GET() {
  return Response.json({ orders: getOrders() });
}

export async function POST(req: Request) {
  const body = await req.json();
  const order = addOrder({ table: body.table, lines: body.lines });
  return Response.json({ ok: true, order }, { status: 201 });
}
