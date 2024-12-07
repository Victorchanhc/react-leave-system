import { Button, Card } from "react-bootstrap";
import { ParentInfo } from "../../../components/ParentInfo";
import { ParticipantInfo, ParticipantInfoList } from "../../../components/ParticipantInfoList";
import { AddNewParticipantCollapse } from "../../../components/AddNewParticipantCollapse";
import { sessionStore } from "../../../services/SessionStore";
import { userService } from "../../../services/UserService";


export default async function MyAccountPage() {

    const user = await sessionStore.get()

    const allDetails = await userService.parentGetLessons(user.id)

    return (
        <div>
            <div className="mx-3">
                <div id="myAccountPageTopBarContainer" className="d-flex justify-content-between my-3">
                    <h2>My Account</h2>
                    <div>
                        <Button size="sm" variant="outline-dark">Change password</Button>
                    </div>
                </div>
                <div className="mb-4">
                    <ParentInfo allDetails={allDetails}/>
                </div>
                <div className="mb-2">
                    <h2>Participant</h2>
                </div>
                <div className="mb-2">
                    <ParticipantInfoList allDetails={allDetails}/>
                </div>
                <div className="border border-dark rounded mb-2 p-2 ">
                    <AddNewParticipantCollapse user_id={user.id}/>
                </div>

            </div>
        </div>
    )
}