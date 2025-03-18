// Login form for the email and password

const LoginForm = () => {
    return (
        <form className="bg-blue-500 p-8 flex flex-col rounded-3xl">
            <h3 className="mb-10 font-bold text-2xl">Login</h3>
            <label className="font-bold">
                Email:
                <input name="email" className="px-3 bg-gray-700 rounded-lg"/>
            </label>
            <label className="m-2 font-bold">
                Password:
                <input name="password" className="px-3 bg-gray-700 rounded-lg"/>
            </label>
            <button className="m-2">Login</button>
            <button className="m-2">Register</button>
        </form>
    )
}

export default LoginForm