
import { sessionStore } from "../../../services/SessionStore"

export default async function LoginPage() {

    await sessionStore.clear()

    return (
        <div>
            Already Logout, Please Login again !
        </div>
    )
}