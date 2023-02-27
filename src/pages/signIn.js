import { useState } from "react";
import Head from "next/head";
import styles from "./signup.module.css";
import { useRouter } from "next/router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
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
      <div className="bg-white rounded-lg shadow-2xl p-8">
      <div className={`flex items-center justify-between px-4 py-2 ${styles.bluebg}`}>
                    <h1 className="text-white px-12 font-bold text-lg">Welcome Back!</h1>
                    
                </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-7">
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
          <div className="mb-7">
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
            <div className="flex justify-between items-center mx-11 mt-4">
          <a
            className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer"
            
            onClick={() => router.push("/forgetpw")}
          >
            Forgotten Password?
          </a>
          </div>
          </div>
          
          <button
            className={`${styles.bluebg} mx-11 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div>
          <p className="text-gray-500 flex items-center justify-center my-3">
  <span className="border-t border-gray-300 flex-grow"></span>
  <span className="px-2">OR</span>
  <span className="border-t border-gray-300 flex-grow"></span>
</p>
          </div>
         
          <button
            className="bg-green-500 hover:bg-green-600 mx-9 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/signup")}
          >
            Create New Account
          </button>
        
      </div>
    </div>
  );
};

export default SignIn;
