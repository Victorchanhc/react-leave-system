import { AdminHomeInfo } from "../../../components/AdminHomeInfo";
import { rescheduleService } from "../../../services/RescheduleService";



export default async function AdminPage() {

    const requests = await rescheduleService.getReschedule()

    return (
        <div>
            <div className="text-center mt-3">
                <h1>Welcome to STFC</h1>
            </div>
            <AdminHomeInfo requests={requests} />
        </div>
    )
}