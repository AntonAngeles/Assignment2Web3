// This is the main login page component
import { useState } from "react"
import LoginForm from "./LoginForm"
import Gallery from "./Gallery"
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
        <div>
            <h1 className="mb-20">Our Application Name</h1>
            {loggedIn ? (
                navigate('/gallery')
            ) : (
                <LoginForm handleSubmit={handleSubmit} handleUser={handleUser} handlePass={handlePass} />
            )}
        </div>
    )
}

export default Login