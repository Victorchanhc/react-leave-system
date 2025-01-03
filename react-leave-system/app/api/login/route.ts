
import { NextRequest, NextResponse } from "next/server";
import { userService } from "../../../services/UserService";
import { checkPassword } from "../../../services/bcrypt";
import { sessionStore } from "../../../services/SessionStore";

export async function POST(request: NextRequest){
    const { email, password } = await request.json()

    const user = await userService.getUser(email)

    if(!user){ // Need to check if user exists
        return NextResponse.json({ message: "Login Failed!"} , { status: 400})
    }
    
    if(await checkPassword(password,user.password)){
        await sessionStore.save({
            id: user.id,
            role: user.role
        })
        return NextResponse.json({ role: user.role })
    }

    return NextResponse.json({ message: "Login Failed!"} , { status: 400})
    
}