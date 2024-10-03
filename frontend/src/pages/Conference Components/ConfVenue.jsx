import React, { useEffect, useState } from "react";
import {
  Carousel,
  CardX,
} from "../../Aceternity Component/apple-cards-carousel";
import { client } from "../../lib/pocketbase";

const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm mx-auto">
    <div className="animate-pulse flex flex-col space-y-4">
      <div className="rounded-lg bg-gray-200 h-48 w-full"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

export function ConfVenue() {
  const [conference, setConference] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    client
      .collection("Conference")
      .getList(1, 50, {
        sort: "order",
      })
      .then((res) => {
        const conferenceData = res.items || [];
        setConference(conferenceData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching conference data:", err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (error)
    return <div className="text-center py-20">Error: {error.message}</div>;

  const cards = conference.map((card, index) => (
    <CardX key={card.id || index} card={card} index={index} />
  ));

  const skeletons = Array(3)
    .fill()
    .map((_, index) => <SkeletonCard key={index} />);

  return (
    <div className="w-full h-full py-20">
      <h2 className="font-bold tracking-tight drop-shadow-md text-3xl md:text-4xl lg:text-5xl text-center mt-12 font-JosefinSans">
        Upcoming International Conference
      </h2>
      {isLoading ? (
        <div className="flex justify-center items-center space-x-4 mt-10">
          {skeletons}
        </div>
      ) : conference.length > 0 ? (
        <Carousel items={cards} />
      ) : (
        <div className="text-center py-10">No upcoming conferences found.</div>
      )}
    </div>
  );
}
