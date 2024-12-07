export async function createStudent(data){
    await fetch(`/api/student`, {
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}

export async function updateStudent(data){
    console.log("get in fetch")
    console.log(data)
    await fetch(`/api/student`, {
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