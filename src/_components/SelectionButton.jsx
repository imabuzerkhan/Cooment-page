import React from 'react'
import { Button } from '@/components/ui/button'
const SelectionButton = ({title , onclick }) => {
  return (
    <div className='flex items-center gap-2 ' >
      <Button onClick={onclick} >{title}</Button>
    </div>
  )
}

export default SelectionButton
