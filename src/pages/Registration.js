import {useState} from "react"
import {useHistory} from "react-router-dom"

function Registration({newUser}) {

    const history = useHistory()
    const [getError, setError] = useState ({error: false, message: ''})
    const [getUser, setUser] = useState(["", "", ""])

    function updateUser(index, event) {
        const user = getUser
        user[index] = event.target.value
        setUser([...user])
    }

    function validate() {
        if(getUser[0].length < 3) {
            return setError({error: true, message: 'User name is too short'})
        }
        if(getUser[1].length < 3) {
            return setError({error: true, message: 'Password is too short'})
        }
        if(getUser[1] !== getUser[2]) {
            return setError({error: true, message: 'Password does not match'})
        }
        history.push('/')
        setError({error: false, message: ''})
        return newUser({name: getUser[0], password: getUser[1]})
    }


    return (
        <div className="form">
            <h3>Register new user</h3>
            <input onChange={(e) => updateUser(0, e)} type="text" placeholder="user name"/> 
            <input onChange={(e) => updateUser(1, e)} type="password" placeholder="password"/>  
            <input onChange={(e) => updateUser(2, e)} type="password" placeholder="password repeat"/>  

            <button onClick={validate}>Register User</button>  

            {getError.error ? <span className="error">{getError.message}</span> : null} 
                    
        </div>
    )
}


export default Registration
