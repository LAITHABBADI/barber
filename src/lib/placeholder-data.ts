export type Service = {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
};

export type Barber = {
  id: string;
  name: string;
  status: "active" | "on_leave";
  phone: string;
  email: string;
  hireDate: Date;
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  visits: number;
  lastVisit: Date;
  totalSpent: number;
};

export type Appointment = {
  id: string;
  customerId: string;
  barberId: string;
  serviceId: string;
  startTime: Date;
  status: "scheduled" | "completed" | "cancelled";
};

// For now, we can leave the arrays empty as the dashboard is static.
// I will add more data as I build out the other pages.
export const barbers: Barber[] = [];
export const services: Service[] = [];
export const customers: Customer[] = [];
export const appointments: Appointment[] = [];