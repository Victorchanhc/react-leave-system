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
    console.log("get in fetch")
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