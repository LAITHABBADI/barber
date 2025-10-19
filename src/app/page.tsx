import { StatCard } from "@/components/stat-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Calendar, Users, DollarSign, Scissors } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back! Here's your business overview.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <StatCard title="Today's Appointments" value="0" icon={Calendar} />
        <StatCard title="Total Customers" value="1" icon={Users} />
        <StatCard title="Total Revenue" value="$0.00" icon={DollarSign} />
        <StatCard title="Active Barbers" value="1" icon={Scissors} />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No appointments scheduled for today.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No recent customer data.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}