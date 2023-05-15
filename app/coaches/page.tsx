import React from "react";
import { getCoaches } from "@/sanity/sanity-utils";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export default async function Coaches() {
  const coaches = await getCoaches();
  const sortedCoaches = coaches.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <div>
      <h1>This is the coaches' page.</h1>
      <h2>It will show a grid of coach profiles pics and name. </h2>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {sortedCoaches.map((coach) => (
          <Link
            href={`/coaches/${coach.slug}`}
            key={coach._id}
            className="flex flex-col items-center border-2 border-gray-500 w-96 p-1 mx-auto rounded-lg mt-4 hover:scale-105 hover:border-blue-950 transition"
          >
            {coach.id}
            <h1>{coach.name}</h1>
            <h2>{coach.title}</h2>
            <Image 
              src={coach.image}
              alt={coach.name}
              width={250}
              height={100}
              className="object-cover rounded-lg border border-gray-500"
              priority
            />
          </Link>
        ))}
      </div>

    </div>
  );
}
