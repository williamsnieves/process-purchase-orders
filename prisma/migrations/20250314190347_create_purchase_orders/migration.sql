-- CreateTable
CREATE TABLE "purchase_orders" (
    "id" BIGSERIAL NOT NULL,
    "text" TEXT,
    "client" TEXT,
    "date" TEXT,
    "total" TEXT,
    "status" TEXT,
    "paid" BOOLEAN,

    CONSTRAINT "purchase_orders_pkey" PRIMARY KEY ("id")
);
