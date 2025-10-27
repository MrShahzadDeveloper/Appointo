import { doctors } from "@/assets/assets_frontend/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/Button"

interface RelatedDoctorsProps {
  docId: string;
  speciality?: string;
}

const RelatedDoctors: React.FC<RelatedDoctorsProps> = ({ docId, speciality }) => {
  const [relDoc, setRelDoc] = useState<any[]>([]);
  useEffect(()=>{
    if(doctors.length > 0 && speciality){
        const doctorData = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId)
        setRelDoc(doctorData)
    }

  },[doctors, speciality, docId])

 

  return(
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Related Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relDoc.slice(0,5).map((item, index)=>(
                <Link href={`/appointment/${item._id}`} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500'>
                    <Image src={item.image} alt='Doctor Image' className='bg-blue-50' />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Avalible</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
};

export default RelatedDoctors;
