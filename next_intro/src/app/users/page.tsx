"use client"
import Users from "@/components/Users"
import { useEffect, useState } from "react"

export default function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async() => {
      const allUsers = await fetch("http://localhost:3000/api/user")
      const result = await allUsers.json()
      console.log(result)
      setUsers(result)
    }
    getUsers()
  },[])
  return <div>
    <h1>users</h1>
    {users?.map((user) => {
      return <Users key={user.id}{...user}/>
    })}
  </div>
}