import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";

export default function AppointmentsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Appointments</h1>
          <p className="text-sm text-muted-foreground">
            Schedule and manage bookings
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Book Appointment
        </Button>
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Appointments</CardTitle>
              <CardDescription>
                A list of all your appointments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>No appointments to display.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}