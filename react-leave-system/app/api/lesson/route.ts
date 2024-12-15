import { NextRequest } from "next/server"
import { adminCourseService } from "../../../services/AdminCourseService"

export async function POST(request: NextRequest) {
    const data = await request.json()
    await adminCourseService.createLesson(data)
    return Response.json({ success: true })
}

export async function PUT(request: NextRequest) {
    const data = await request.json()
    await adminCourseService.updateLesson(data)
    return Response.json({ success: true })
}

export async function DELETE(request: NextRequest) {
    const data = await request.json()
    await adminCourseService.deleteLesson(data)
    return Response.json({ success: true })
}