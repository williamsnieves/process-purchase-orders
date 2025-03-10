type Order = {
  id: string;
  text: string;
  client: string;
  date: string;
  total: string;
  status: string;
  paid: boolean;
};

export const loadLoaders = () => {
  if (typeof window !== "undefined") {
    const storedOrders = localStorage.getItem("orders");
    return (
      (storedOrders ? JSON.parse(storedOrders) : null) || [
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
      ]
    );
  }

  return [];
};

export const saveOrders = (orders: Order[]) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};
