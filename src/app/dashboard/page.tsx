"use client";

import { useEffect, useState } from "react";
import { DashboardCard } from "../components/DashboardCard";
import Link from "next/link";

export default function Dashboard() {
  const [pendingOrders, setPendingOrders] = useState(0);
  const [processedOrders, setProcessedOrders] = useState(0);

  useEffect(() => {
    async function fetchOrders() {
      const result = await fetch("/api/orders");
      const orders = await result.json();

      setPendingOrders(
        orders.filter((order) => order.status === "pending").length
      );

      setProcessedOrders(
        orders.filter((order) => order.status === "processed").length
      );
    }

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <DashboardCard
          count={pendingOrders}
          color="bg-blue-500"
          title="Pending orders"
        />

        <DashboardCard
          color="bg-green-500"
          count={processedOrders}
          title="Processed orders"
        />

        <Link
          href="/orders"
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          📋 Handle Orders
        </Link>
      </div>
    </div>
  );
}
