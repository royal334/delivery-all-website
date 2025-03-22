import { Icons } from '@/components/Icons'
import Image from 'next/image'
import React from 'react'

interface TeamCardProps {
    name:string,
    position:string,
    avatar:string
}
const TeamCard: React.FC<TeamCardProps> = ({ name, position, avatar }) => {
  return (
    <div className='border-[0.5px] border-[#B5C020] bg-[#FFFFFF] cursor-pointer p-6 rounded-3xl flex flex-col items-center justify-center
    hover:transition-all hover:duration-300 hover:ease-in-out hover:scale-105 hover:shadow-lg'>
       <Image width={120} height={120} alt='team-member' className='object-contain' src={avatar}/>
       <p className='font-bold text-base text-bluish-green font-inter pt-3'>{name}</p>
       <p className='text-[#8A8A8A] text-sm font-poppins py-3'>{position}</p>
       <div className="flex items-center gap-3">
        <Icons.linkedin/>
        <Icons.instagram/>
        <Icons.twitter/>
       </div>
    </div>
  )
}

export default TeamCard
