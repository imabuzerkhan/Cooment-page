import { MdOutlineReplyAll } from "react-icons/md";

import React from 'react'
import { Button } from '@/components/ui/button'

const Privatecard = () => {
  return (
    <>
     <div className="public bg-green-50 w-[31rem] px-6 py-3  ">
      <h3 className='text-[1rem] font-serif' > If you’re in a serious crisis or feeling unsafe, please contact a trusted adult immediately or reach out to a mental health hotline in your area. Your well-being is important, and there are people who want to help you. ❤️</h3>
      <div className='flex justify-end my-1 ' >
      <Button> <MdOutlineReplyAll /> Reply</Button>
      </div>

    </div>
    
    </>
  )
}

export default Privatecard
