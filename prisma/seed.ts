import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.order.deleteMany({});

  // Seed with initial data
  const orders = [
    {
      id: "1",
      text: "Orden #001",
      client: "Juan Pérez",
      date: "2024-03-10",
      total: "$120.50",
      status: "pending",
      paid: true,
    },
    {
      id: "2",
      text: "Orden #002",
      client: "Ana Gómez",
      date: "2024-03-09",
      total: "$250.00",
      status: "pending",
      paid: false,
    },
    {
      id: "3",
      text: "Orden #003",
      client: "Carlos López",
      date: "2024-03-08",
      total: "$89.99",
      status: "pending",
      paid: true,
    },
  ];

  for (const order of orders) {
    await prisma.order.create({
      data: order,
    });
  }

  console.log("Database has been seeded with initial data");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
