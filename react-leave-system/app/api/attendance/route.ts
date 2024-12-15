import { NextRequest } from "next/server"
import { adminCourseService } from "../../../services/AdminCourseService"

export async function PUT(request: NextRequest) {
    const data = await request.json()
    await adminCourseService.updateAttendance(data)
    return Response.json({ success: true })
}