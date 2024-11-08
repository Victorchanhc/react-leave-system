import { AdminHomeInfo } from "../../../components/AdminHomeInfo";



export default function AdminPage() {

    const requests = [
        {
            name: "Jacko",
            originLesson: "星期日 下午 荃灣",
            requestLesson: "星期六 下午 荃灣",
            status: "PENDING",
            reason: "天雨取消"
        }
    ]

    return (
        <div>
            <div className="text-center mt-3">
                <h1>Welcome to STFC</h1>
            </div>
            <AdminHomeInfo requests={requests} />
        </div>
    )
}