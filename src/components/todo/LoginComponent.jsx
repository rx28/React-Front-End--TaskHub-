import { useState } from 'react'
import {BrowserRouter,Routes,Route,useNavigate,useParams,Link} from 'react-router-dom'
import { useAuth } from './security/AuthContext';

export default function LoginComponent(){
 
    const [username,setUsername]=useState('ab');
    const [password,setPassword]=useState('');

    //const [showSuccessMessage,setShowSuccessMessage]=useState(false);
    const [showErrorMessage,setShowErroMessage]=useState(false);
    
    const navigate=useNavigate();

    const authContext=useAuth();


    function handelUsernameChange(event){
      //  console.log(event.target.value);
        setUsername(event.target.value)
    }

    function handelPasswordChange(event){
       // console.log(event.target.value);
        setPassword(event.target.value)
    }

   async function handleSubmit(){
        if(await authContext.login(username,password)){
            // setShowSuccessMessage(true);
            // setShowErroMessage(false);
             navigate(`/welcome/${username}`)
            
        }
        else{
          //  setShowSuccessMessage(false)
            setShowErroMessage(true)
            //console.log('failed')
        }
      //console.log(username);
      //console.log(password);

    }
    
    
    // function SuccessMessageComponent(){
    //     if (showSuccessMessage){
    //     return (
    //         <div className='successMessage'>Authenticated successfully</div>
                
    //     )
    //     }
    //     return null;
         
    // }
    
    // function ErrorMessageComponent(){
    //     if (showErrorMessage){
    //     return (
    //         <div className='errorMessage'>Authenticated failed.</div>    
    //     )
    //     }
    //      return null;
    // }
    

    return(
        
        
        <div className="Login">
            <h1>Time to Login!</h1>
           {/* {showSuccessMessage && <div className='successMessage'>Authenticated successfully</div>} */}
            {showErrorMessage && <div className='errorMessage'>Authenticated failed.</div>}
            {/* <SuccessMessageComponent></SuccessMessageComponent>
            <ErrorMessageComponent/>
         */}
            <div className="Loginform">
                <div>
                    <label>User name</label>
                    <input type="text" name="username" value={username} onChange={handelUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handelPasswordChange}  />
                    <div>
                        <button type="button" name="Login" onClick={handleSubmit}>Login</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
