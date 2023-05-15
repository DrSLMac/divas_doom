import React from 'react'
import { getCoach } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { coach: string };
}

export default async function Coach({ params }: Props) {

  const slug = params.coach;
  const coach = await getCoach(slug);
  return (
    <div className='max-w-3xl mx-auto py-10'>Each Coach will have their own Bio Page
      <p>This is <span>{coach.name}&apos;s</span> page</p>
      <Image 
        src={coach.image}
        alt={coach.name}
        width={250}
        height={100}
        className="object-cover rounded-lg border border-gray-500"
        priority
      />
      <p>{coach.title}</p>

      <div><PortableText value={coach.content}/></div>


    </div>
  )
}

