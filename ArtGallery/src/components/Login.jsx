// This is the main login page component
import { useState } from "react"
import LoginForm from "./LoginForm"

const Login = () => {

    const [user, setUser] = useState()
    const [pass, setPass] = useState()

    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }
    
    // const handleSubmit = () => {
    //     if (user == "bill" && pass == 123)
    //     {

    //     } else {

    //     }
    // }

    return (
        <div>
            <h1 className="mb-20">Our Application Name</h1>
            <LoginForm user={user} pass={pass} handleUser={handleUser} handlePass={handlePass}/>
        </div>
    )
}

export default Login