import React from 'react'

const ListItems = ({children,className}) => {
  return (
    <li className={className}>{children}</li>
  )
}

export default ListItems