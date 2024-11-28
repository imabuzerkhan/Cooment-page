import React from 'react'
import { Button } from '@/components/ui/button'
const SelectionButton = ({title}) => {
  return (
    <div className='flex items-center gap-2 ' >
      <Button>{title}</Button>
    </div>
  )
}

export default SelectionButton
