import {Link, useHistory} from "react-router-dom"

function Sidebar({loggedIn, logout}) {
    const history = useHistory()

    function out() {
        history.push('/')
        return logout()
    }

    return (
        <div className="sidebar text-center">

            {loggedIn.loggedIn ? <div>{loggedIn.name}</div> : null}

            {!loggedIn.loggedIn ? 

            <div>
                <Link to='/'>
                    <div className="button">Login</div>
                </Link>

                <Link to="/register">
                    <div className="button">Register</div>
                </Link>
            </div>
        
            :

            <div>
                <Link to="/upload">
                    <div className="button">Upload</div>
                </Link>

                <Link to="/allproducts">
                    <div className="button">Gallery</div>
                </Link>

                <div onClick={logout} className="button">Logout</div>
                
            </div>
            
            
            }
            
            
        </div>
    )
}


export default Sidebar
