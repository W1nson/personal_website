// 'use server'

// import Link from 'next/link'; 
// import Image from 'next/image'; 
// import { Publication } from '@/app/lib/definitions';

// type Props {
//     data: Publication
// }

// export default async function Publications({ data, ...rest }: ) {
//     //     {/* Conference, publisher */}
//     //     {/* authers */}
//     //     {/* additional links */}
//     //     {/* add image to the right */}
//     return(
//         <div className='flex flex-col p-8'>
//             <Link 
//                 key={data.title}
//                 href={data.link}
//                 className="flex h-[50px] text-lg items-center justify-center hover:underline">
//                 {/* title with link */}
//                     <strong>{data.title}</strong>
//             </Link>
//             <div className='flex flex-row'>
//                 <div className='w-2/3'>
//                     <div className='py-1'>
//                         <span>Conference: {data.conference}</span>
//                     </div>
//                     <div className='py-1'>
//                         <span>Publisher: {data.publisher}</span>        
//                     </div>
//                     <div className='py-1'>
//                         <span>Authors: {data.authors}</span>
//                     </div>
//                     <div className='py-1'>
//                         <span>Abstract: {data.abstract}</span>
//                     </div>
//                 </div>
//                 <Image src={data.image} className="w-1/3" width={500} height={500} alt="temperary"/>
//             </div>
            

//         </div>

//     );


// }

