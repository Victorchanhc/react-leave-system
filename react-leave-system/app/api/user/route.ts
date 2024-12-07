import { NextRequest } from "next/server"
import { userService } from "../../../services/UserService"

export async function POST(request: NextRequest) {
    const data = await request.json()
    await userService.createUser(data)
    return Response.json({ success: true })
}

export async function PUT(request: NextRequest) {
    const data = await request.json()
    const id = data.id
    const username = data.username
    const phone = data.phone
    await userService.updateUser(id, username, phone)
    return Response.json({ success: true })
}