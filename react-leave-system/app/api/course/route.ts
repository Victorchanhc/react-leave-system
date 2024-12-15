import { NextRequest } from "next/server"
import { adminCourseService } from "../../../services/AdminCourseService"

export async function POST(request: NextRequest) {
    const data = await request.json()
    await adminCourseService.createCourse(data)
    return Response.json({ success: true })
}

export async function PUT(request: NextRequest) {
    const data = await request.json()
    await adminCourseService.updateCourse(data)
    return Response.json({ success: true })
}

export async function DELETE(request: NextRequest) {
    const data = await request.json()
    await adminCourseService.deleteCourse(data)
    return Response.json({ success: true })
}