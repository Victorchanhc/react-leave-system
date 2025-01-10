import { headers } from "next/headers";
import { AdminHomeInfo } from "../../../components/AdminHomeInfo";
import { rescheduleService } from "../../../services/RescheduleService";


export default async function AdminPage() {

    // Very good usage of SQL aggregation function
    let requests = await rescheduleService.getReschedule()

    console.log(requests)

    headers()
    return (
        <div>
            <div className="text-center mt-3">
                <h1>Welcome to STFC</h1>
            </div>
            <AdminHomeInfo requests={requests} />
        </div>
    )
}