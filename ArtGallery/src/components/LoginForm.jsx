// Login form for the email and password

const LoginForm = (props) => {
    return (
        <form className="bg-blue-500 p-8 flex flex-col rounded-3xl">
            <h3 className="mb-10 font-bold text-2xl">Login</h3>
            <label className="font-bold">
                Username:
                <input name="username" onChange={props.handleUser} className="px-3 bg-gray-700 rounded-lg"/>
            </label>
            <label className="m-2 font-bold">
                Password:
                <input name="password" type="password" onChange={props.handlePass}className="px-3 bg-gray-700 rounded-lg"/>
            </label>
            <button className="m-2" onClick={props.handleSubmit}>Login</button>
            <button className="m-2">Register</button>
        </form>
    )
}

export default LoginForm