export async function createLesson(data){
    await fetch(`/api/lesson`, {
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}

export async function updateLesson(data){
    await fetch(`/api/lesson`, {
        method : "PUT",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}

export async function deleteLesson(data) {
    await fetch(`/api/lesson`, {
        method : "DELETE",
        body: JSON.stringify(data)
    })
    
}