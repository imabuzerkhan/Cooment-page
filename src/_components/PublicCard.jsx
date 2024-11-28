import { MdOutlineComment } from "react-icons/md";
import React from 'react'
import { Button } from '@/components/ui/button'
const PublicCard = () => {
  return (
    <>
    <div className="public bg-green-50 w-[31rem] px-6 py-3  ">
      <h3 className='text-[1rem] font-serif' > If your school has a counselor or psychologist, they can provide the guidance and support you need. Alternatively, community mental health resources can be a great option.</h3>
      <div className='flex justify-end my-1 ' >
      <Button> <MdOutlineComment /> Comment</Button>
      </div>
    </div>
    
    </>
  )
}

export default PublicCard
