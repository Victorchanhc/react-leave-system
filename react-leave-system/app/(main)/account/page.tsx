import { Button, Card } from "react-bootstrap";
import { ParentInfo } from "../../../components/ParentInfo";
import { ParticipantInfo } from "../../../components/ParticipantInfo";
import { AddNewParticipantCollapse } from "../../../components/AddNewParticipantCollapse";


export default function MyAccountPage() {

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
                    <ParentInfo />
                </div>
                <div className="mb-2">
                    <h2>Participant</h2>
                </div>
                <div className="mb-2">
                    <ParticipantInfo />
                </div>
                <div className="border border-dark rounded mb-2 p-2 ">
                    <AddNewParticipantCollapse />
                </div>

            </div>
        </div>
    )
}