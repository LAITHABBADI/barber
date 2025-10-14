"use client";

import { useState } from "react";
import { ChairCard } from "@/components/chair-card";
import { chairs as initialChairs, type Chair } from "@/lib/placeholder-data";
import { BookingModal } from "@/components/booking-modal";
import { stylists } from "@/lib/placeholder-data";

export default function Dashboard() {
  const [chairs, setChairs] = useState<Chair[]>(initialChairs);
  const [selectedChair, setSelectedChair] = useState<Chair | null>(null);

  const handleBookNow = (chair: Chair) => {
    setSelectedChair(chair);
  };

  const handleCloseModal = () => {
    setSelectedChair(null);
  };

  const handleBookingSubmit = (bookingDetails: {
    client: string;
    service: string;
    endTime: Date;
  }) => {
    if (!selectedChair) return;

    // Assign a random stylist for now
    const randomStylist =
      stylists[Math.floor(Math.random() * stylists.length)];

    setChairs((currentChairs) =>
      currentChairs.map((c) =>
        c.id === selectedChair.id
          ? {
              ...c,
              status: "occupied",
              client: bookingDetails.client,
              service: bookingDetails.service,
              endTime: bookingDetails.endTime,
              stylist: randomStylist.name,
            }
          : c
      )
    );
    setSelectedChair(null); // Close modal on submit
  };

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Chair Status Dashboard
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {chairs.map((chair) => (
          <ChairCard key={chair.id} chair={chair} onBookNow={handleBookNow} />
        ))}
      </div>
      {selectedChair && (
        <BookingModal
          chair={selectedChair}
          onClose={handleCloseModal}
          onSubmit={handleBookingSubmit}
        />
      )}
    </>
  );
}