import { NextRequest } from "next/server"
import { studentService } from "../../../services/StudentService"

export async function POST(request: NextRequest) {
    console.log("get in route POST")

    const data = await request.json()
    await studentService.createStudent(data)
    return Response.json({ success: true })
}

export async function PUT(request: NextRequest) {
    console.log("get in fetch PUT")

    const data = await request.json()
    await studentService.updateStudent(data)
    return Response.json({ success: true })
}