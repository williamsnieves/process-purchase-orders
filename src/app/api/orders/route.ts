import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// NOTE: If you're seeing "Property 'purchaseOrder' does not exist" error,
// you need to run: pnpm dlx prisma generate

const prisma = new PrismaClient();

// Helper function to convert BigInt to string
const serializeBigInt = <T>(data: T): T => {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
};

export async function GET() {
  try {
    const orders = await prisma.purchaseOrder.findMany();
    const serializedOrders = serializeBigInt(orders);
    return NextResponse.json(serializedOrders);
  } catch (error) {
    return NextResponse.json(
      {
        error: `Error al obtener órdenes: ${
          error instanceof Error ? error.message : JSON.stringify(error)
        }`,
      },
      { status: 500 }
    );
  }
}
