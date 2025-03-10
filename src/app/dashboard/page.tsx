"use client";

import { DashboardCard } from "../components/DashboardCard";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const goToOrders = () => {
    router.push("/orders");
  };

  return (
    <div>
      <DashboardCard
        color="text-red"
        count={0}
        title="test title"
        onCardClick={goToOrders}
      />
    </div>
  );
}
