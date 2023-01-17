import React from 'react'
import {Link} from 'react-router-dom'

export default function ItemNav(props) {
  return (
    <Link to="#" className='border p-2 rounded-3 text-reset text-decoration-none'>{props.nombre}</Link>
  )
}
