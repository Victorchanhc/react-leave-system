

export async function createUser(data){
    await fetch(`/api/user`, {
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({
            username:data.username,
            phone : data.phone,
            email : data.email,
            password : data.password
        })
    })
}

export async function updateUser(user_id:number, username:string, phone:string){
    await fetch(`/api/user`, {
        method : "PUT",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({id:user_id, username, phone})
    })
}

export async function deleteTodo(id:number) {
    await fetch(`/todos/${id}`, {
        method : "DELETE"
    })
    
}