import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Services</h1>
          <p className="text-sm text-muted-foreground">
            Manage your service catalog
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Service
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Service List</CardTitle>
          <CardDescription>A list of all available services.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>No services to display.</p>
        </CardContent>
      </Card>
    </>
  );
}