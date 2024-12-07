import { NextRequest, NextResponse } from 'next/server';
import { sessionStore } from './services/SessionStore';

const isRouteWithoutMiddleware = (path:string)=>{
    const excludedPrefix = [
        "/login",
        "/api/login",
        "/register",
        "/api/user",
        "/_next/static",
        "/favicon.ico"
    ]
    return excludedPrefix.some(prefix=> path.startsWith(prefix)) 
} 

const isAdminMiddleware = (path:string)=>{
    const adminGuard = [
        "/admin"
    ]
    return adminGuard.some(guard=> path.startsWith(guard)) 
} 

export async function middleware(request: NextRequest) {

    const pathname = request.nextUrl.pathname

    if(isRouteWithoutMiddleware(pathname)){
        return NextResponse.next();
    }
    const session = await sessionStore.get()

    if(!session.id){
            return NextResponse.redirect(new URL('/login', request.url));
        }
    
        
    if(isAdminMiddleware(pathname) && session.role != 'ADMIN'){
        console.log("is not admin login")
        return NextResponse.redirect(new URL('/', request.url))
        
    }
    
    return NextResponse.next();
}