import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const GET =async () => {

    const users = await prisma.user.findMany()
    
    return NextResponse.json(users)
    
}

export const POST =async (request: NextRequest) => {

    const body = await request.json()
    const newusers = await prisma.user.create({
        data:{
            first_name: body.first_name,
            email: body.email
        }
    })
    
    return NextResponse.json(newusers)
    
}