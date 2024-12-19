export async function createCourse(data){
    await fetch(`/api/course`, {
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}

export async function updateCourse(data){
    await fetch(`/api/course`, {
        method : "PUT",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
}

export async function deleteCourse(data) {
    await fetch(`/api/course`, {
        method : "DELETE",
        body: JSON.stringify(data)
    })
    
}