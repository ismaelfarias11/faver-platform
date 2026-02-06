import TableClient from "./TableClient";

export default async function Page({
  params,
}: {
  params: Promise<{ table: string }>;
}) {
  const { table } = await params;
  return <TableClient table={table} />;
}
