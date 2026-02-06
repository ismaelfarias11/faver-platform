import fs from "node:fs";
import path from "node:path";

export type OrderStatus = "NEW" | "IN_PROGRESS" | "DONE";

export type OrderLine = { id: string; name: string; qty: number; unitPrice: number };

export type Order = {
  id: string;
  table: string;
  createdAt: number;
  status: OrderStatus;
  subtotal: number;
  lines: OrderLine[];
};

const DATA_DIR = path.join(process.cwd(), ".data");
const FILE_PATH = path.join(DATA_DIR, "orders.json");

function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, "[]", "utf8");
}

function readAll(): Order[] {
  ensureStorage();
  const raw = fs.readFileSync(FILE_PATH, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Order[]) : [];
  } catch {
    return [];
  }
}

function writeAll(orders: Order[]) {
  ensureStorage();
  fs.writeFileSync(FILE_PATH, JSON.stringify(orders, null, 2), "utf8");
}

function uid() {
  return `ord_${Math.random().toString(16).slice(2)}_${Date.now()}`;
}

export function getOrders(): Order[] {
  const orders = readAll();
  return orders.sort((a, b) => b.createdAt - a.createdAt);
}

export function addOrder(input: { table: string; lines: OrderLine[] }): Order {
  const orders = readAll();

  const lines = Array.isArray(input.lines) ? input.lines : [];
  const subtotal = lines.reduce((acc, l) => acc + Number(l.qty) * Number(l.unitPrice), 0);

  const order: Order = {
    id: uid(),
    table: String(input.table ?? ""),
    createdAt: Date.now(),
    status: "NEW",
    subtotal,
    lines: lines.map((l) => ({
      id: String(l.id),
      name: String(l.name),
      qty: Number(l.qty),
      unitPrice: Number(l.unitPrice),
    })),
  };

  orders.unshift(order);
  writeAll(orders);
  return order;
}

export function getOrderById(id: string): Order | undefined {
  const orders = readAll();
  return orders.find((o) => o.id === id);
}

export function updateOrderStatus(id: string, status: OrderStatus): Order | undefined {
  const orders = readAll();
  const o = orders.find((x) => x.id === id);
  if (!o) return undefined;
  o.status = status;
  writeAll(orders);
  return o;
}
