import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import styles from "./signup.module.css";
import Image from 'next/image';
import { useState , useEffect} from 'react';


function checking ()  {
 
    
    return (
        <div className="w-full flex items-center justify-center  m-20 h-906 bg-gray-100">
  <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
    <div className={`flex items-center justify-between px-4 py-2 sm:${styles.bluebg}`}>
      <h1 className="text-white font-bold text-lg">Create an Account</h1>
      <button className="text-white hover:text-gray-200">
        <XIcon className="h-5 w-5" />
      </button>
    </div>
    <div className="px-4 py-6">
      <p className="text-gray-500 text-sm"></p>
      <div className="flex flex-col sm:flex-row mt-8">
        <button className={`flex-1 py-2 ${styles.bluebg}`} >
          Become a User
        </button>
        <button className={`flex-1 py-2 ${styles.bluebg} bg-gray-200 text-gray-500 mt-2 sm:mt-0`}>
          Become a Creator
        </button>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex items-center justify-center w-32 h-32 bg-gray-200 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.46 14.15a6 6 0 117.08 0l.72.71a1 1 0 01-1.41 1.41l-.72-.71a6 6 0 01-4.94 0l-.72.71a1 1 0 11-1.41-1.41l.72-.71z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <label htmlFor="avatar-upload" className={`justify-center px-4 py-2 text-sm font-medium text-white ${styles.bluebg} rounded-md cursor-pointer hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}></label>
          <button type="button" className="mt-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
            Delete Avatar
          </button>
          <input type="file" id="avatar-upload" accept="image/*" className="sr-only" />
        </div>
      </div>
      <>
                            <div className="mt-8 ">


                            </div>
                            <div className="mt-8 space-y-6">
                                <div className='flex flex-row items-center'>
                                    <div className="space-y-1 w-full mr-2">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-700"

                                        >

                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            placeholder='First Name'
                                            required
                                            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1 w-full">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium text-gray-700"

                                        >
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            placeholder='Last Name'
                                            required
                                            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                        placeholder=''
                                    >

                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder='Enter your email'
                                        required
                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                                <div className='flex flex-row items-center'>
                                    <div className="space-y-2 mr-2 w-full">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium text-gray-700"

                                            >

                                            </label>
                                            <span className="text-xs text-gray-500">
                                                (Min. 8 characters)
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="current-password"
                                            placeholder='Password'
                                            required
                                            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="space-y-6 w-full">
                                        <label
                                            htmlFor="password-confirm"
                                            className="block text-sm font-medium text-gray-700"
                                            placeholder='Re-type Passwword'
                                        >

                                        </label>
                                        <input
                                            type="password"
                                            name="password-confirm"
                                            id="password-confirm"
                                            autoComplete="current-password"
                                            placeholder='Re-type Passwword'
                                            required
                                            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        id="terms"
                                        required
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="terms" className="text-sm font-medium text-gray-700">
                                        By clicking Create Account, I agree to NFCs{" "}
                                        <a href="#" className="text-blue-600 underline">
                                            Terms
                                        </a>
                                        ,{" "}
                                        <a href="#" className="text-blue-600 underline">
                                            Privacy Policy
                                        </a>
                                        , and{" "}
                                        <a href="#" className="text-blue-600 underline">
                                            Cookie Policy
                                        </a>
                                        .
                                    </label>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${styles.bluebg} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        </>
                   
                </div>
            </div>
        </div>


    )
}

export default checking