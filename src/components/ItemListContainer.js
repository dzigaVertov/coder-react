import React from 'react'

export default function ItemListContainer(props) {
  return (
    <div className='p-3 mt-3 w-50 mx-auto text-primary-emphasis bg-info border border-primary rounded-3 text-center'>
      Hola {props.greeting}
      </div>
  )
}
