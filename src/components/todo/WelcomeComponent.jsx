import {BrowserRouter,Routes,Route,useNavigate,useParams,Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { retrieveHelloWorldBean, retrieveHelloWorldBeanPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

export default function WelcomeComponent(){
 
    const {username}=useParams();
    const [message,setMessage]=useState(null);
    const authContext=useAuth()

    function  callHelloWorldRestApi(){
       console.log('called');
    //     axios.get('http://localhost:8080/hello-world')
    //    .then((response)=>successfullResponse(response))//if all goes well
    //    .catch((error)=>errorResponse(error))//if we got an error
    //    .finally(()=>console.log('cleanup'))

    //     retrieveHelloWorldBean()
    //    .then((response)=>successfullResponse(response))//if all goes well
    //    .catch((error)=>errorResponse(error))//if we got an error
    //    .finally(()=>console.log('cleanup'));

       retrieveHelloWorldBeanPathVariable('rahul',authContext.token)
       .then((response)=>successfullResponse(response))//if all goes well
       .catch((error)=>errorResponse(error))//if we got an error
       .finally(()=>console.log('cleanup'));


    }

    function successfullResponse(response){
        setMessage(response.data.message)
        console.log(response)
    }

    function errorResponse(error){
        console.log(error)
    }
    
    return(
        <div className='WelcomeComponent'>
        <h1>Welcome {username}</h1>
        <div>
           Manage your todos-<Link to='/todos'>Go Here</Link>
        </div>
        <div>
            <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                Call Hello World</button>
                
        </div>
        <div className='text-info'>{message}</div>
        </div>
    )
}
