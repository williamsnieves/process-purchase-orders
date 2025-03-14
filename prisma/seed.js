const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.purchaseOrder.deleteMany({});

  // Seed with initial data
  const orders = [
    {
      text: "Orden #001",
      client: "Juan Pérez",
      date: "2024-03-10",
      total: "$120.50",
      status: "pending",
      paid: true,
    },
    {
      text: "Orden #002",
      client: "Ana Gómez",
      date: "2024-03-09",
      total: "$250.00",
      status: "pending",
      paid: false,
    },
    {
      text: "Orden #003",
      client: "Carlos López",
      date: "2024-03-08",
      total: "$89.99",
      status: "pending",
      paid: true,
    },
  ];

  for (const order of orders) {
    await prisma.purchaseOrder.create({
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
