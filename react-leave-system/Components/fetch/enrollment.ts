export async function createEnrollment(data){
    await fetch(`/api/enrollment`, {
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}

export async function updateEnrollment(data){
    console.log("get in fetch")
    console.log(data)
    await fetch(`/api/enrollment`, {
        method : "PUT",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}

export async function deleteTodo(id:number) {
    await fetch(`/todos/${id}`, {
        method : "DELETE"
    })
    
}