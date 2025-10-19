import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export default function ExpensesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Expenses</h1>
          <p className="text-sm text-muted-foreground">
            Track your business operating costs
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Expense
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Expense List</CardTitle>
          <CardDescription>A list of all business expenses.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>No expenses to display.</p>
        </CardContent>
      </Card>
    </>
  );
}