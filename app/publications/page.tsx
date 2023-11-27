import { promises as fs } from 'fs';
import Link from 'next/link'; 
import Image from 'next/image';
import { Publication } from '@/app/lib/definitions'; 
// import Publication from '@/app/ui/publicationFormat';

export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/app/publications/publications.json', 'utf8');
    const datas = JSON.parse(file);
    return (
        <>
            {datas.map((data: Publication) => {
            return (
                <div className='flex flex-col p-8'>
            <Link 
                key={data.title}
                href={data.link}
                className="flex h-[50px] text-lg items-center justify-center hover:underline">
                {/* title with link */}
                    <em>{data.title}</em>
            </Link>
            <div className='flex flex-row'>
                <div className='w-2/3'>
                    <div className='py-1'>
                        <span>Conference: {data.conference}</span>
                    </div>
                    <div className='py-1'>
                        <span>Publisher: {data.publisher}</span>        
                    </div>
                    <div className='py-1'>
                        <span>Authors: {data.authors}</span>
                    </div>
                    <div className='py-1'>
                        <span>Abstract: {data.abstract}</span>
                    </div>
                </div>
                <Image src={data.image} className="w-1/3 rounded" width={713} height={641} alt="temperary"/>
            </div>
            

        </div>
            );
        })}
        </>
    );


  }