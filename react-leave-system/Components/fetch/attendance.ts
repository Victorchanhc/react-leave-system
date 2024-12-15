export async function updateAttendance(data){
    console.log("get in fetch")
    await fetch(`/api/attendance`, {
        method : "PUT",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}