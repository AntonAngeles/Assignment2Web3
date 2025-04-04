// Login form for the email and password

const LoginForm = (props) => {

    const regisHandler = () => {
        return alert("User: Bill Password: 123")
    }

    return (
        <form className="bg-blue-500 p-7 flex flex-col rounded-3xl items-center">
            <h3 className="mb-6 font-bold text-2xl text-white">Login</h3>
            <label className="font-bold text-center text-white flex">
                Username:
                <input name="username" onChange={props.handleUser} className="px-3 mx-3 font-medium bg-white text-black rounded-lg "/>
            </label>
            <label className="m-2 font-bold text-white flex">
                Password:
                <input name="password" type="password" onChange={props.handlePass}className="px-3 mx-3 font-medium text-black bg-white rounded-lg"/>
            </label>
            <button className="m-2 text-white bg-blue-900 mx-50 p-2 px-3 rounded-2xl" onClick={props.handleSubmit}>Login</button>
            <button className="text-white bg-blue-900 mx-50 p-2 px-3 rounded-2xl" onClick={regisHandler} >Register</button>
        </form>
    )
}

export default LoginForm