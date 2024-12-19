export async function createReschedule(data){
    await fetch(`/api/reschedule`, {
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}

export async function updateReschedule(id:number){
    await fetch(`/api/reschedule`, {
        method : "PUT",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(id)
    })
}

export async function deleteTodo(id:number) {
    await fetch(`/todos/${id}`, {
        method : "DELETE"
    })
    
}