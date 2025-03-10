type props = {
  color: string;
  title: string;
  count: number;
  onCardClick?: () => void;
};

export function DashboardCard({ color, title, count, onCardClick }: props) {
  return (
    <div
      className={`m-7 p-6 text-gray rounded-lg shadow-md border border-gray-300  ${color}`}
      onClick={onCardClick}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-3xl font-bold mt-2">{count}</p>
    </div>
  );
}
