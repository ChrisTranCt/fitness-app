

    export async function GetExercises(){
        try{
       var username= localStorage.getItem("username")
      const res=await fetch('http://localhost:5000/api/exercise/'+`${username}`,{
           method:"GET",})
        const data= await res.json()
        // console.log(data)
        return data;
        }
        catch(error){
            console.error("error fetch",error)
            throw error ;

        }
        
    }
    export async function PostExercises(Exercise){
        try{
       var username= localStorage.getItem("username")
       const userData=JSON.stringify({
        "username":`${username}`,
        "exercises":Exercise
    })
    // console.log(userData)
      const res=await fetch('http://localhost:5000/api/exercise/'+`${username}`,{
      body:userData,
      method:"POST",
    headers:{'Content-Type': 'application/json'}
    })
        const data= await res.json()
        return data;
        }
        catch(error){
            console.error("error fetch",error)
            throw error ;

        }
        
    }
    export async function PutExercises(Exercise){
        try{
       var username= localStorage.getItem("username")
       const userData=JSON.stringify({
        "username":`${username}`,
        "exercises":Exercise
    })
    // console.log(userData)
      const res=await fetch('http://localhost:5000/api/exercise/'+`${username}`,{
      body:userData,
      method:"PUT",
    headers:{'Content-Type': 'application/json'}
    })
        const data= await res.json()
        return data;
        }
        catch(error){
            console.error("error fetch",error)
            throw error ;

        }
        
    }
    export async function DeleteExercises(Exercise){
        try{
            var username= localStorage.getItem("username")
            const userData=JSON.stringify({
                "username":`${username}`,
                "exercises":Exercise
            })
            const res=await fetch('http://localhost:5000/api/exercise/'+`${username}`,{
                method:"DELETE",
                body:userData,
                headers: {
                    "Content-type": "application/json"
                }})
                const data= await res.json()
                
        return data;
        }
        catch(error){
            console.error("error fetch",error)
            throw error ;

        }
        
    }