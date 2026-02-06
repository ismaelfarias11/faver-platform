export async function GET() {
  return new Response(JSON.stringify({ ok: true, ping: "orders" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
