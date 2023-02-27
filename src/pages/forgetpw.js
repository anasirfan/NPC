
import Head from 'next/head'
import Link from 'next/link'
import styles from "./signup.module.css";
import { useState } from 'react';



export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Set the form state to "submitting"
    setFormState('submitting');

    try {
      // Call the backend API to check the email
      const response = await fetch('/api/check-email', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // If the email is valid, set the form state to "submitted"
        setFormState('submitted');
      } else {
        // If the email is not valid, show an error message
        setFormState('error');
      }
    } catch (error) {
      console.error(error);
      // If there was an error with the API call, show an error message
      setFormState('error');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Forgot Password - Your Site Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email address and we`ll send you a link to reset your password.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${styles.bluebg} hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                disabled={formState === 'submitting'}
              >
                {formState === 'submitted'
                  ? 'Reset link sent!'
                  : formState === 'error'
                    ? 'Error. Please try again.'
                    : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mt-1 text-center">
            <p className="text-sm text-gray-600">
              <Link href="/signIn">
                <span className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                  Go back to sign in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
