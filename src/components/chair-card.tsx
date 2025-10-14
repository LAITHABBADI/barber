import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Chair } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import { Clock, User, Scissors as ScissorsIcon } from "lucide-react";

function formatTime(date?: Date) {
  if (!date) return "";
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function ChairCard({
  chair,
  onBookNow,
}: {
  chair: Chair;
  onBookNow: (chair: Chair) => void;
}) {
  const isAvailable = chair.status === "available";

  return (
    <Card
      className={cn(
        "transition-all",
        isAvailable
          ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
          : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
      )}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{chair.name}</CardTitle>
          <Badge
            variant={isAvailable ? "default" : "destructive"}
            className={cn(
              "capitalize",
              isAvailable && "bg-green-600 hover:bg-green-700"
            )}
          >
            {chair.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 min-h-[90px]">
        {isAvailable ? (
          <p className="text-sm text-muted-foreground pt-2">
            Ready for the next client.
          </p>
        ) : (
          <>
            <div className="flex items-center text-sm">
              <User className="mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground" />
              <span>{chair.client}</span>
            </div>
            <div className="flex items-center text-sm">
              <ScissorsIcon className="mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground" />
              <span>
                {chair.stylist} ({chair.service})
              </span>
            </div>
            <div className="flex items-center text-sm font-medium">
              <Clock className="mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground" />
              <span>Ends at {formatTime(chair.endTime)}</span>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter>
        {isAvailable ? (
          <Button
            size="sm"
            className="w-full"
            onClick={() => onBookNow(chair)}
          >
            Book Now
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="w-full">
            View Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}