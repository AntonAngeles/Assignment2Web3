// This is the main login page component
import { useState } from "react"
import LoginForm from "./LoginForm"
import { useNavigate } from "react-router"

const Login = () => {

    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    const handleUser = (e) => {
        setUser(e.target.value)
        console.log(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user === "bill" && pass === "123") {
            console.log("submitted");
            setLoggedIn(true);
        } else {
            alert("Wrong Username and password. User: Bill Password: 123");
        }
    }

    return (
        <div className="mx-150 flex-grow">
            <h1 className="text-center font-bold text-white text-2xl p-5 mb-10 pt-30" >Our Application Name</h1>
            {loggedIn ? (
                navigate('/Gallery')
            ) : (
                <LoginForm handleSubmit={handleSubmit} handleUser={handleUser} handlePass={handlePass} />
            )}
        </div>
    )
}

export default Login