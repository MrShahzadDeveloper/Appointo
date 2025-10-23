"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import Button from "../components/Button"
import Image from 'next/image';
import { assets } from '@/assets/assets_frontend/assets';

const Banner = () => {
    const router = useRouter()
    const handleClick = ()=>{
        router.push("/login")
    }
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Book Appointment</p>
                <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <Button text='Create Account'  classStyle='text-black px-10 bg-[#ffff] hover:bg-[#EAEFFF] py-4  mt-6' onClick={handleClick} />
        </div>
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <Image src={assets.appointment_img} alt='Appointment image' className='absolute w-full bottom-0 right-0 max-w-md' />
        </div>
    </div>
  )
}

export default Banner