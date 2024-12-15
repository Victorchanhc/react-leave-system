export async function updateAttendance(data){
    await fetch(`/api/attendance`, {
        method : "PUT",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}