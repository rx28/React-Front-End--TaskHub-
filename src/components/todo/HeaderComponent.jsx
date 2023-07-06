import { useContext } from 'react'
import {BrowserRouter,Routes,Route,useNavigate,useParams,Link} from 'react-router-dom'
import { AuthContext, useAuth } from './security/AuthContext'

export default function HeaderComponent(){

    //const authContext=useContext(AuthContext);
    const authContext=useAuth()//new way to hook
    //console.log(authContext.number); prints the number
    const isAuthenticated=authContext.isAuthenticated    
    console.log(authContext)
    function logout(){
        authContext.logout();
    }
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/rx28">Github</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                               {isAuthenticated && <Link className="nav-link" to="/welcome/ab">Home</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                 {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                          {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                            
                        </li>
                        <li className="nav-item fs-5">
                           {isAuthenticated  && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

        
    )
}
