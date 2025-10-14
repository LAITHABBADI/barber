export type Chair = {
  id: string;
  name: string;
  status: "available" | "occupied";
  stylist?: string;
  client?: string;
  service?: string;
  endTime?: Date;
};

export const chairs: Chair[] = [
  { id: "1", name: "Chair 1", status: "available" },
  {
    id: "2",
    name: "Chair 2",
    status: "occupied",
    stylist: "Alex",
    client: "Jane Doe",
    service: "Haircut & Color",
    endTime: new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
  },
  { id: "3", name: "Chair 3", status: "available" },
  { id: "4", name: "Chair 4", status: "available" },
  {
    id: "5",
    name: "Chair 5",
    status: "occupied",
    stylist: "Maria",
    client: "John Smith",
    service: "Styling",
    endTime: new Date(Date.now() + 30 * 60 * 1000), // 30 mins from now
  },
  { id: "6", name: "Chair 6", status: "available" },
];