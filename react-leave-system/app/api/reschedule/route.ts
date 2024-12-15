import { NextRequest } from "next/server"
import { rescheduleService } from "../../../services/RescheduleService"

export async function POST(request: NextRequest) {

    const data = await request.json()
    await rescheduleService.createReschedule(data)
    return Response.json({ success: true })
}

export async function PUT(request: NextRequest) {

    const data = await request.json()
    await rescheduleService.updateReschedule(data)
    return Response.json({ success: true })
}