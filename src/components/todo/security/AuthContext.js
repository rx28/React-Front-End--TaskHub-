import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService, executeJwtAuthenticationService } from "../api/AuthenticationApiService";

//1Create a contexte
export const AuthContext=createContext()

export const useAuth=()=>useContext(AuthContext)


//2 Share the created context with other components
export default function AuthProvider({children}){

   //Put some state in the context
  // const [number,setNumber]= useState(10)    
   const [isAuthenticated,setAuthenticated]= useState(false)
   const [username,setUsername]= useState(null)    
   const [token,setToken]=useState(null)

//   setInterval(() => setNumber(number +1), 10000);for example
    
    //const valueToBeShared={number,isAuthenticated,setAuthenticated}

//     function login(username,password){
//         if(username==='ab' && password==='ab'){
//             setAuthenticated(true)
//             setUsername(username)
//             //console.log('sucess')
//             return true            
//         }
//         else{
//             setAuthenticated(false)
//             setUsername(null)
//             return false
            
//     }
// }
//yaha async isliey lagaya kyuki hume wait karna hai response ke success.
// async function login(username,password){

//     const baToken='Basic '+ window.btoa(username + ":" + password)
   
//     try{
//         const response =await executeBasicAuthenticationService(baToken)
//         if(response.status=200){
//         setAuthenticated(true)
//         setUsername(username)
//         setToken(baToken)
        
//         apiClient.interceptors.request.use(
//             (config) =>{
//                 console.log('intercepting')
//                 config.headers.Authorization=baToken
//                 return config
//             }
//         )

//         //console.log('sucess')
//         return true            
//     }
//     else{
//         logout()
        
//         return false
        
// }
//     }catch(error){
//         logout()
//         return false
//     }
    
// }

async function login(username,password){

   
    try{
        const response =await executeJwtAuthenticationService(username,password)
        if(response.status=200){
        const jwtToken='Bearer '+response.data.token
            setAuthenticated(true)
        setUsername(username)
        setToken(jwtToken)
        
        apiClient.interceptors.request.use(
            (config) =>{
                console.log('intercepting')
                config.headers.Authorization=jwtToken
                return config
            }
        )

        //console.log('sucess')
        return true            
    }
    else{
        logout()
        
        return false
        
}
    }catch(error){
        logout()
        return false
    }
    
}












   function logout(){
    setAuthenticated(false)
    setToken(null)
    setUsername(null)
   }

    // return (
    //         <AuthContext.Provider value={{number,isAuthenticated,login,logout}}>
    //             {children}
    //         </AuthContext.Provider>
    // )updated
    return (
        <AuthContext.Provider value={{isAuthenticated,login,logout,username,token}}>
            {children}
        </AuthContext.Provider>
)
}
