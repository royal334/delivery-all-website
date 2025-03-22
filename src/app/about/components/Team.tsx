import React from 'react'
import TeamCard from './TeamCard'

const teamMembers =[
    {
        name:'Chinedu Okafor',
        position:'Founder & CEO',
        avatar:'/fortune-team.png'
    },
    {
        name:'Amara Nwosu ',
        position:'Chief Operations Officer',
        avatar:'/amara-team.png'
    },
    {
        name:'Obinna Ezeukwu ',
        position:'Chief Technology Officer',
        avatar:'/obinna-team.png'
    }
]
const Team = () => {
  return (
    <div className=' bg-[#F6F6F6]'>
        <div className="container w-full mx-auto  py-16 px-6 lg:px-20 ">
            <div className='w-full lg:max-w-xl mx-auto flex items-center justify-center flex-col gap-3 mb-16'>
                <p className='uppercase font-bold font-inter text-bright-green text-center'>OUR TEAM</p>
                <h3 className='text-black-1 font-bold font-inter text-xl'>Meet Our Leadership Team</h3>
                <p className='text-center text-[#8A8A8A] font-poppins '>Dedicated professionals working together to transform the delivery industry
                </p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
                {
                    teamMembers.map((team)=>(<TeamCard key={team.name} {...team}/>))
                }
            </div>
        </div>
    </div>
  )
}

export default Team
