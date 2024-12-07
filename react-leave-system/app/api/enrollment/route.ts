import { NextRequest } from "next/server"
import { enrollmentService } from "../../../services/EnrollmentService"

export async function POST(request: NextRequest) {
    console.log("get in route POST")

    const data = await request.json()
    await enrollmentService.createEnrollment(data)
    return Response.json({ success: true })
}

export async function PUT(request: NextRequest) {
    console.log("get in fetch PUT")

    const data = await request.json()
    await enrollmentService.updateEnrollment(data)
    return Response.json({ success: true })
}