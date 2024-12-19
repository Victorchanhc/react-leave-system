import { AdminHomeInfo } from "../../../components/AdminHomeInfo";
import { rescheduleService } from "../../../services/RescheduleService";


export default async function AdminPage() {

    let requests = [];

    try {
        requests = await rescheduleService.getReschedule()
    } catch (error) {
        console.error("Error fetching reschedule data:", error);
    }

    return (
        <div>
            <div className="text-center mt-3">
                <h1>Welcome to STFC</h1>
            </div>
            <AdminHomeInfo requests={requests} />
        </div>
    )
}