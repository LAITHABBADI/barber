import { StatCard } from "@/components/stat-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";

export default function FinancesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Finances</h1>
          <p className="text-sm text-muted-foreground">
            Track revenue and expenses
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <StatCard title="Total Revenue" value="$0.00" icon={TrendingUp} />
        <StatCard title="Total Expenses" value="$0.00" icon={TrendingDown} />
        <StatCard title="Net Income" value="$0.00" icon={DollarSign} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown</CardTitle>
          <CardDescription>
            A breakdown of revenue by service or barber.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>No revenue data for this month.</p>
        </CardContent>
      </Card>
    </>
  );
}