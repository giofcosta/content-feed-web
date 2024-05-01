import type { Content } from "@/interfaces/content";
import Image from 'next/image';

async function getData(): Promise<Content[]> {
  const res = await fetch(`${process.env.URL}/api/content`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function ContentList() {
  const data = await getData();
  return <main>
      {data.map((content) => ( 
         <Image
         src={content.image}
         alt={content.title}
         width={300}
         height={600}
         className="bg-[url('https://plchldr.co/i/1600x300?&bg=67229f&fc=f8f8f8&text=1600x300')] w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]"
         key={content.id}
       />
      
      ))}
  </main>;
}
