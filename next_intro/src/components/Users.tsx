import React from 'react'

export type UserType = {
    id: number
    first_name: string
    email: string
}

const Users = ({first_name, email}: UserType) => {
  return (
    <div>
        <h3>name: {first_name}</h3>
        <p>email: {email}</p>
    </div>
  )
}

export default Users