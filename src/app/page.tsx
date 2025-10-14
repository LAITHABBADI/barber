import { ChairCard } from "@/components/chair-card";
import { chairs } from "@/lib/placeholder-data";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Chair Status Dashboard
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {chairs.map((chair) => (
          <ChairCard key={chair.id} chair={chair} />
        ))}
      </div>
    </>
  );
}