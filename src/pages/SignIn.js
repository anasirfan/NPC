import { useState } from "react";
import Head from "next/head";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your authentication logic with backend API here
    // Redirect user to index.js page
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    // Your forgot password logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
              placeholder="Email"
            >
              
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
              placeholder="Password"
            >
             
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <a
            className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer"
            href="#"
            onClick={handleForgotPassword}
          >
            Forgotten Password?
          </a>
          <div className="border border-gray-400 w-px h-4"></div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/signup")}
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
