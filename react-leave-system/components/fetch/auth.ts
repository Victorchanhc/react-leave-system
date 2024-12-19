

export async function login(email: string, password:string){
    const res = await fetch('/api/login', {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    return res
}


export async function logout(){
    const res = await fetch('/api/logout', {
        method:"POST",
        
    })
    return res.json()
}