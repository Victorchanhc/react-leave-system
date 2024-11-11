
import { NextResponse } from "next/server"
import { sessionStore } from "../../../services/SessionStore"

export async function POST(){
     
    await sessionStore.clear()

    return NextResponse.json({success:true})
}