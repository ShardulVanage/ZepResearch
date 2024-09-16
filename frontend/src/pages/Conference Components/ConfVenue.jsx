import Image from "../../utils/Image";
import React ,{useEffect,useState} from "react";
import { Carousel, CardX } from "../../Aceternity Component/apple-cards-carousel";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { client } from "../../lib/pocketbase";




export function ConfVenue() {
  const [conference, setConference] = useState([])
  useEffect(()=>{
    client.collection("Conference")
    .getFullList()
    .then((res)=> setConference(res))
  });

  const cards = conference.map((card, index) => (
    <CardX key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 font-sans">
        Upcoming International  Conference <span className="bg-clip-text text-transparent bg-gradient-to-tr from-cyan-500 via-blue-500 to-blue-600"> 2024</span> 
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



