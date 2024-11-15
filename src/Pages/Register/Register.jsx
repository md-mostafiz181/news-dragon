import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Create a New Account
                    </h2>
                    <hr />

                    <form  className="space-y-6 mt-3">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="photoUrl"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photoUrl"
                                name="photoUrl"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your photo URL"
                                required
                            />
                        </div>

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
                                name="email"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your email"
                                required
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
                                name="password"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold text-lg"
                        >
                            Register
                        </button>
                    </form>



                    <p className="text-center text-gray-500 text-sm mt-6">
                        Already have an account? <Link to="/login"><a href="#" className="text-blue-600 hover:underline">
                            Login
                        </a></Link>
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;