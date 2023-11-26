import { promises as fs } from 'fs';
import Link from 'next/link'; 
import Image from 'next/image'; 
import Publication from '@/app/ui/publicationFormat';

export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/app/publications/publications.json', 'utf8');
    const datas = JSON.parse(file);
    return (
        <>
            {datas.map((data) => {
            return (
                <Publication data={data}/>
            );
        })}
        </>
    );


  }