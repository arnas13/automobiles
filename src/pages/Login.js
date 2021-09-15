import {useState} from "react"
import {useHistory} from "react-router-dom"

function Login({users, login}) {

    const history = useHistory()
    const [getError, setError] = useState ({error: false, message: ''})
    const [user, setUser] = useState (['', ''])

    function updateUser(index, event) {
        const usr = user
        usr[index] = event.target.value
        setUser([...usr])
    }

    function log() {
        const usr = users.find(x => x.name ===user[0] && x.password === user[1])

        if(!!usr) {
            history.push('/allproducts')
            return login(usr.name)
        } else {
            setError({error: true, message: 'user does not exist'})
        }

        console.log(usr);
    }

    return (
        <div className="form">
            <h3>Sign in</h3>
            <input onChange={(e) => updateUser(0, e)} type="text" placeholder="user name"/> 
            <input onChange={(e) => updateUser(1, e)} type="password" placeholder="password"/>  

            <button onClick={log}>Login</button>  

            {getError.error ? <span className="error">{getError.message}</span> : null} 
                    
        </div>
    )
}


export default Login
