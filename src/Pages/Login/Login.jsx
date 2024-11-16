
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {

    const handleToLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password= e.target.password.value;
        console.log(email,password)


    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Login your account
          </h2>
          <hr />

          <form  onSubmit={handleToLogin} className="space-y-6 mt-3 ">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold text-lg"
            >
              Login
            </button>
          </form>

  
          <p className="text-center text-gray-500 text-sm mt-6">
            Don’t have an account? <Link to="/register"><a href="#" className="text-blue-600 hover:underline">
              Register
            </a></Link>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
