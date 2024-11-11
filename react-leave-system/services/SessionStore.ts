import { sealData, unsealData } from 'iron-session';
import {cookies} from 'next/headers';

type Session = {
    id?: number
    role?: string
}

export class SessionStore{

    async get():Promise<Session>{
        const session_id = cookies().get('session_id')
        if(!session_id){
            return {}
        }
        const data = await unsealData<Session>(session_id.value, {password: process.env.COOKIE_SECRET + ""})
        return data
    }

    async save(session: Session){
        const session_id = await sealData(session, {password: process.env.COOKIE_SECRET + ""})
        cookies().set("session_id", session_id, {
            maxAge: 86400 *14,
            secure:true,
            httpOnly:true
        })
    }

    async clear(){
        await this.save({})
    }
}

export const sessionStore = new SessionStore()