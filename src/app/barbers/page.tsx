import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export default function BarbersPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Barbers</h1>
          <p className="text-sm text-muted-foreground">Manage your team</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Barber
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Barber List</CardTitle>
          <CardDescription>A list of all barbers.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>No barbers to display.</p>
        </CardContent>
      </Card>
    </>
  );
}