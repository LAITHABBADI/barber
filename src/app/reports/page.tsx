import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Reports</h1>
          <p className="text-sm text-muted-foreground">
            Generate and view business reports
          </p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>
            Select a report to generate and view.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Reporting features are coming soon.</p>
        </CardContent>
      </Card>
    </>
  );
}