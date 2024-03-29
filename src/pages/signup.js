import { useState, useRef } from "react";
import { XIcon } from "@heroicons/react/outline";
import React from "react";
import styles from "./signup.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Ethereum } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import Select from "react-select";
import { FiLock } from "react-icons/fi";

import countries from "countries-list";

function Signup() {
  const emailRef = useRef(null);

  const router = useRouter();
  const [isUser, setIsUser] = useState(true);
  const [avatar, setAvatar] = useState(true);
  const [fbLink, setFbLink] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");
  const [ethLink, setEthLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [twitchLink, setTwitchLink] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showVerification, setShowVerification] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  function handleCreateAccountClick() {
    setShowVerification(true);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleCodeChange(event, index) {
    const newCode = [...code];
    newCode[index] = event.target.value;
    setCode(newCode);
  }

  function handleResendClick() {
    // TODO: Resend verification code
  }

  function handleSubmitClick() {
    // TODO: Submit verification code and create account
  }

  const [selectedLang, setSelectedLang] = useState("");

  function handleLangChange(event) {
    setSelectedLang(event.target.value);
  }

  const countryOptions = Object.entries(countries.countries).map(
    ([code, countryData]) => ({
      value: code,
      label: countryData.name,
    })
  );

  const handleButtonClick = (linkSetter, setLink) => {
    if (linkSetter) {
      setLink(linkSetter);
    } else {
      setLink("");
    }
  };

  const handleKeyDown = (event, linkSetter, setLink) => {
    if (event.key === "Enter") {
      handleButtonClick(linkSetter, setLink);
    }
  };

  const renderLinkButton = (linkSetter, setLink) => {
    const label = linkSetter ? "Linked" : "Link";
    const style = linkSetter ? { backgroundColor: "blue", color: "white" } : {};

    return (
      <div className="right-0">
        <button
          className={`rounded-full px-2  w-20 h-6 pb-3 border ${styles.bluecol2}  hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
          style={style}
          onClick={() => handleButtonClick(linkSetter, setLink)}
        >
          <div className="">{label}</div>
        </button>
      </div>
    );
  };

  const renderLinkInput = (linkSetter, setLink) => {
    if (linkSetter) {
      return null;
    }

    return (
      <input
        className="rounded-md py-2 px-4 w-20"
        type="text"
        placeholder="Enter link..."
        onKeyDown={(e) => handleKeyDown(e, linkSetter, setLink)}
      />
    );
  };

  const [isCreator, setIsCreator] = useState(false);
  const [showCreatorContent, setShowCreatorContent] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(file);
  };

  const handleCreateAccount = () => {
    // Handle API call to create account
  };

  const toggleUserCreator = () => {
    setShowCreatorContent(false);
    setIsUser(!isUser);
  };

  const handleNextClick = () => {
    setShowCreatorContent(true);
  };
  const NewClick = () => {
    signupDiv.style.transform = "translateX(200em)";
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };
  function handleKeyUp(event, index) {
    if (event.key === "Backspace" && index > 0) {
      // If Backspace is pressed, focus on the previous input field
      inputRefs.current[index - 1].focus();
    } else if (event.key !== "Backspace" && index < code.length - 1) {
      // If a character is entered, focus on the next input field
      inputRefs.current[index + 1].focus();
    }
  }

  return (
    <div
      id="signup-div"
      className="w-full flex items-center justify-center mt-10 h-1/5 bg-gray-100"
    >
      <div className=" w-full max-w-xl bg-white rounded-lg shadow-2xl   ">
        <div className="flex items-center justify-between px-4 pt-2 ">
          <h1 className="text-black font-bold text-xl mx-4">Sign up</h1>
          <button
            className="text-black  rounded-3xl border bg-white -mr-6 -mt-10 hover:text-gray-500"
            onClick={() => {
              // get a reference to the signup div
              const signupDiv = document.getElementById("signup-div");
              // close the signup div by setting its display property to "none"
              signupDiv.style.display = "none";
            }}
          >
            <XIcon className="h-3 w-3 m-2" />
          </button>
        </div>
        <div className="px-4 mx-4 pb-6 pt-2">
          <p className="text-gray-500 font-semibold text-sm ">
            Already a user?{" "}
            <a
              style={{ cursor: "pointer" }}
              className={`pl-2 ${styles.bluecol} hover:text-blue-400`}
              onClick={() => router.push("/signIn")}
            >
              Sign In
            </a>
          </p>
          <div class="border-t mt-4 border-gray-300"></div>
          <div></div>
          <div className="flex flex-col sm:flex-row mt-8">
            <button
              className={`border rounded-lg text-sm font-semibold flex-1 py-2 ${
                isUser
                  ? styles.bluebg + " text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
              onClick={toggleUserCreator}
            >
              Become a user
            </button>
            <button
              className={`border rounded-lg text-sm font-semibold flex-1 py-2 ${
                !isUser
                  ? styles.bluebg + " text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
              onClick={toggleUserCreator}
            >
              Become a creator
            </button>
          </div>

          {/* {(isUser && isCreator) || (
                        <div className="flex justify-between items-center m-10">
                            <div className="flex items-center justify-center w-32 h-32 bg-gray-200 rounded-full">
                                {avatar ? (
                                    <Image
                                        src={URL.createObjectURL(avatar)}
                                        alt="Avatar"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-20 w-20 text-gray-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.46 14.15a6 6 0 117.08 0l.72.71a1 1 0 01-1.41 1.41l-.72-.71a6 6 0 01-4.94 0l-.72.71a1 1 0 11-1.41-1.41l.72-.71z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </div>
                            <div className="mt-4 flex flex-col items-center  ">
                                <label
                                    htmlFor="avatar-upload"
                                    className={` justify-center px-4 py-2 text-sm font-medium text-white ${styles.bluebg} rounded-md cursor-pointer hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}
                                >
                                    {avatar ? "Change Avatar" : "Upload Avatar"}
                                </label>
                                {avatar && (
                                    <button
                                        type="button"
                                        className="mt-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                                        onClick={handleDeleteAvatar}
                                    >
                                        Delete Avatar
                                    </button>
                                )}
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    accept="image/*"
                                    className="sr-only"
                                    onChange={handleAvatarChange}
                                />
                            </div>
                        </div>)} */}
          {/* become a user */}
          {isUser && (
            <>
              <div className="mt-8 "></div>

              <div className="mt-8 space-y-6">
                <div className="text-sm text-gray-500">Account details</div>
                <div className="flex flex-row items-center">
                  <div className="space-y-1 w-full mr-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="First Name"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1 w-full">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Last Name"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="relative space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    placeholder=""
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Email "
                    ref={emailRef}
                    required
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <span className="absolute left-14 top-1 text-sm italic text-opacity-60 text-gray-500">
                    (Verification is necessary)
                  </span>
                </div>
                <div className="flex flex-row items-center">
                  <div className="space-y-2 mr-2 w-full">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      ></label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="password-confirm"
                      className="block text-sm font-medium text-gray-700"
                      placeholder="Re-type Passwword"
                    ></label>
                    <input
                      type="password"
                      name="password-confirm"
                      id="password-confirm"
                      autoComplete="current-password"
                      placeholder="Re-type Passwword"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="relative space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    placeholder=""
                  ></label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    autoComplete="username"
                    placeholder="Username"
                    required
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="mt-8">
                  <div className="text-sm text-gray-500">
                    Additional details
                  </div>
                  <div className="flex flex-row space-x-3">
                    <div className="flex items-center flex-col w-1/2 mt-4 space-x-4">
                      <label
                        htmlFor="dob"
                        className="text-gray-500 font-medium"
                      >
                        Date of Birth:
                      </label>
                      <div className="flex flex-row space-x-1/2">
                        <select
                          id="dob-day"
                          name="dob-day"
                          className="border rounded-md  py-2 px-2 w-22"
                        >
                          <option value="" disabled selected>
                            Day
                          </option>
                          {Array.from(Array(31), (_, i) => i + 1).map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                        <select
                          id="dob-month"
                          name="dob-month"
                          className="border rounded-md py-2 px-2 w-22"
                        >
                          <option value="" disabled selected>
                            Month
                          </option>
                          {[
                            { value: "01", label: "January" },
                            { value: "02", label: "February" },
                            { value: "03", label: "March" },
                            { value: "04", label: "April" },
                            { value: "05", label: "May" },
                            { value: "06", label: "June" },
                            { value: "07", label: "July" },
                            { value: "08", label: "August" },
                            { value: "09", label: "September" },
                            { value: "10", label: "October" },
                            { value: "11", label: "November" },
                            { value: "12", label: "December" },
                          ].map((month) => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                        </select>

                        <select
                          id="dob-year"
                          name="dob-year"
                          className="border rounded-md py-2 px-4 w-22"
                        >
                          <option value="" disabled selected>
                            Year
                          </option>
                          {Array.from(
                            Array(100),
                            (_, i) => i + new Date().getFullYear() - 99
                          )
                            .reverse()
                            .map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center flex-col w-1/2 space-x-2  mt-4">
                      <span className="text-gray-500 font-medium">Gender:</span>
                      <div className="flex items-center pt-2 space-x-2">
                        <label htmlFor="male" className="flex items-center">
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-gray-700">Male</span>
                        </label>
                        <label htmlFor="female" className="flex items-center">
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-gray-700">Female</span>
                        </label>
                        <label htmlFor="other" className="flex items-center">
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-gray-700">Other</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="space-y-2 mr-6 w-full">
                    <Select
                      options={countryOptions}
                      placeholder="Select country"
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                    />
                  </div>
                  <div className="space-y-2  mr-6 w-full">
                    <select
                      id="lang-select"
                      className="space-y-2 h-10 mr-2  w-full rounded-md border border-gray-300"
                      value={selectedLang}
                      onChange={handleLangChange}
                    >
                      <option value="default">Select Langauge</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="it">Italiano</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row space-x-20  px-8  items-center">
                  <button
                    className={`flex items-center  hover:bg-blue-700 hover:text-white hover:font-semibold ${styles.bluecol} font-bold w-30 py-2 px-4 border connect-wallet-button rounded`}
                  >
                    <span className={`${styles.bluecol} mr-2 text-sm`}>
                      &#9679;
                    </span>
                    Connect Wallet
                  </button>
                  <button
                    className={`flex items-center   hover:bg-blue-700 hover:text-white hover:font-semibold ${styles.bluecol} font-bold w-30 py-2 px-4 border enable-auth-button rounded`}
                  >
                    Enable 2.0 authentication
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium text-gray-700"
                  >
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
                <div className="mt-6 mx-10">
                  <button
                    type="submit"
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${styles.bluebg} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleCreateAccountClick}
                    ref={emailRef}
                  >
                    Create Account
                  </button>
                </div>
                {showVerification && (
                  <div
                    id="pop-up"
                    className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center "
                  >
           
                    <div className="bg-white w-2/6 h-96 rounded-lg flex flex-col items-center justify-center relative">
                    <div className="flex items-center justify-between px-2 -ml-6 py-2 absolute -top-2 right-5 ">
                      <button
                        className={`text-black absolute rounded-3xl border bg-white ${styles.cross}   hover:text-gray-500`}
                        onClick={() => {
                          // get a reference to the signup div
                          const signupDiv = document.getElementById("pop-up");
                          // close the signup div by setting its display property to "none"
                          signupDiv.style.transform = "translateX(-200em)";
                          setShowVerification(false);
                        }}
                      >
                        <XIcon className="h-3 w-3 m-2" />
                      </button>
                    </div>
                      <FiLock className="text-blue-500 text-6xl" />
                      <h2 className="text-xl font-semibold mt-4">
                        Authenticate your account
                      </h2>
                      <p className="text-sm mt-2 mx-16 text-center">
                        Protecting your account is our first priority. Please
                        provide the verification code sent to {email} for
                        confirming your account.
                      </p>
                      <div className="flex mt-4 space-x-4">
                        {code.map((value, index) => (
                          <input
                            key={index}
                            type="text"
                            value={value}
                            maxLength={1}
                            className="w-12 h-12 bg-gray-300 text-center font-mono text-lg border border-gray-200 rounded-lg"
                            onChange={(event) => handleCodeChange(event, index)}
                            onKeyUp={(event) => handleKeyUp(event, index)}
                            ref={(input) => (inputRefs.current[index] = input)}
                          />
                        ))}
                      </div>
                      <div className="flex mt-4 space-x-4">
                        <button
                          className="flex items-center px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                          onClick={handleResendClick}
                        >
                          Resend
                        </button>
                        <button
                          className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                          onClick={handleSubmitClick}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Become a creator: */}
          {!isUser && !showCreatorContent && (
            <>
              <div className="mt-8 "></div>
              <div className="mt-8 space-y-6">
                <div className="flex flex-row items-center">
                  <div className="space-y-1 w-full mr-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="First Name"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1 w-full">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Last Name"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    placeholder=""
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    required
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <div className="space-y-2 mr-2 w-full">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      ></label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="password-confirm"
                      className="block text-sm font-medium text-gray-700"
                      placeholder="Re-type Passwword"
                    ></label>
                    <input
                      type="password"
                      name="password-confirm"
                      id="password-confirm"
                      autoComplete="current-password"
                      placeholder="Re-type Passwword"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="space-y-1 w-full mr-2">
                    <label
                      htmlFor="Username"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="text"
                      name="Username"
                      id="Username"
                      autoComplete="given-name"
                      placeholder="Username"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1 w-full">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="text"
                      name="mobile-number"
                      id="mobile-number"
                      autoComplete="mobile-number"
                      placeholder="Mobile Phone Number"
                      required
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <h2 className="text-xs font-semibold pt-5 mb-0 text-gray-500">
                  Channel Details:
                </h2>
                <div className="space-y-1">
                  <label
                    htmlFor="Channel Name"
                    className="block text-sm font-medium text-gray-700"
                    placeholder=""
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Channel Username"
                    required
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="space-y-2  mr-6 w-full">
                  <select
                    id="lang-select"
                    className="space-y-2 h-10 mr-2  w-full rounded-md border border-gray-300 text-gray-400"
                    value={selectedLang}
                    onChange={handleLangChange}
                  >
                    <option value="default">Select Category</option>
                    <option value="en">Sports</option>
                    <option value="es">Games</option>
                    <option value="fr">Business</option>
                    <option value="de">Travel</option>
                    <option value="it">Learning</option>
                  </select>
                </div>

                <h2 className="text-xs font-semibold  text-gray-500">
                  Other Social Media Accounts
                </h2>
                <div className="flex flex-row w-full space-x-4 justify-center">
                  <div className="px-4">
                    <div className=" mx-3 justify-between flex w-full flex-row">
                      <div className="flex justify-between space-x-4 pb-2 ">
                        <div className="ml-2 border rounded-lg w-6 flex justify-center border-black">
                          <FaFacebookF className="h-4 w-4 mt-1 bg-white" />
                        </div>
                        <div className="text-gray-500">Facebook</div>
                      </div>
                      <div className="ml-6 h-4">
                        {fbLink
                          ? renderLinkInput(
                              fbLink,
                              setFbLink,
                              "Enter Facebook Link"
                            )
                          : renderLinkButton(fbLink, setFbLink, "Facebook")}
                      </div>
                    </div>
                    <div className=" mx-3 justify-between flex w-full mt-5 flex-row">
                      <div className="flex justify-between space-x-4 pb-2  ">
                        <div className="ml-2  w-6 flex justify-center ">
                          <FaTiktok className="h-4 w-4 mt-1 bg-white" />
                        </div>
                        <div className="text-gray-500">Tiktok</div>
                      </div>
                      <div className="ml-6 h-4">
                        {tiktokLink
                          ? renderLinkInput(
                              tiktokLink,
                              setTiktokLink,
                              "Enter Tiktok Link"
                            )
                          : renderLinkButton(
                              tiktokLink,
                              setTiktokLink,
                              "Tiktok"
                            )}
                      </div>
                    </div>
                    <div className=" mx-3 justify-between flex w-full mt-5 flex-row">
                      <div className="flex justify-between space-x-4 pb-2 ">
                        <div className="ml-2  w-6 flex justify-center ">
                          <FaEthereum className="h-4 w-4 mt-1 bg-white" />
                        </div>
                        <div className="text-gray-500">ETH wallet</div>
                      </div>
                      <div className="ml-6 h-4">
                        {ethLink
                          ? renderLinkInput(
                              ethtwitterLinksetEthLink,
                              "Connect ETH wallet"
                            )
                          : renderLinkButton(ethLink, setEthLink, "ETH wallet")}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row w-full space-x-4 justify-between">
                    <div className="ml-2 ">
                      <div className="pr-8 justify-between flex w-full flex-row">
                        <div className="flex justify-between space-x-4 pb-2  ">
                          <div className="ml-2  w-6 flex justify-center ">
                            <FaTwitter className="h-4 w-4 mt-1 bg-white" />
                          </div>
                          <div className="text-gray-500">Twitter</div>
                        </div>
                        <div className="ml-6 h-4">
                          {twitterLink
                            ? renderLinkInput(
                                twitterLink,
                                setTwitterLink,
                                "Enter Twitter Link"
                              )
                            : renderLinkButton(
                                twitterLink,
                                setTwitterLink,
                                "Twitter"
                              )}
                        </div>
                      </div>
                      <div className=" pr-8 justify-between flex w-full mt-5 flex-row">
                        <div className="flex justify-between space-x-4 pb-2 ">
                          <div
                            className={`ml-2 h-7 w-7 border rounded-lg  flex justify-center  ${styles.bluebg} ${styles.whitecol}`}
                          >
                            <FaInstagram
                              className={` ${styles.bluebg} h-4 w-4 justify-center mt-1 `}
                            />
                          </div>
                          <div className="text-gray-500">Instagram</div>
                        </div>
                        <div className="ml-6 h-4">
                          {instaLink
                            ? renderLinkInput(
                                instaLink,
                                setInstaLink,
                                "Enter Instagram Link"
                              )
                            : renderLinkButton(
                                instaLink,
                                setInstaLink,
                                "Instagram"
                              )}
                        </div>
                      </div>
                      <div className=" pr-8 justify-between flex w-full mt-5 flex-row">
                        <div className="flex justify-between space-x-4 pb-2 ">
                          <div className="ml-2  w-6 flex justify-center ">
                            <FaTwitch className="h-4 w-4 mt-1 bg-white" />
                          </div>
                          <div className="text-gray-500">Twitch</div>
                        </div>
                        <div className="ml-6 h-4">
                          {twitchLink
                            ? renderLinkInput(
                                twitchLink,
                                setTwitchLink,
                                "Enter Twitch Link"
                              )
                            : renderLinkButton(
                                twitchLink,
                                setTwitchLink,
                                "Twitter"
                              )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-300"></div>
                <div></div>
                <h2 className="text-xs font-semibold pt-2  text-gray-500">
                  Target Auidence
                </h2>
                <div className="flex flex-row items-center ">
                  <div className="flex  flex-col w-1/2 space-x-2 mt-2">
                    <span className="text-gray-500 pl-3 -mt-2 font-medium">
                      Age Range:
                    </span>
                    <select
                      id="lang-select"
                      className="space-y-2 h-8 mx-2 mt-3 w-full rounded-md border border-gray-300  text-gray-400"
                      value={selectedLang}
                      onChange={handleLangChange}
                    >
                      <option value="default">0-6</option>
                      <option value="en">7-13</option>
                      <option value="es">13-17</option>
                      <option value="fr">18-24</option>
                      <option value="de">25-34</option>
                      <option value="it">45-54</option>
                      <option value="it">55-64</option>
                      <option value="it">65 and above</option>
                    </select>
                  </div>

                  <div className="flex ml-4 flex-col w-1/2 space-x-2">
                    <span className="text-gray-500 ml-2 font-medium">
                      Gender:
                    </span>
                    <div className="flex items-center mt-3 space-x-4">
                      <label htmlFor="male" className="flex items-center">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-gray-700">Male</span>
                      </label>
                      <label htmlFor="female" className="flex items-center">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-gray-700">Female</span>
                      </label>
                      <label htmlFor="other" className="flex items-center">
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          value="other"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-gray-700">Other</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                    className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <div className="px-2">
                    <label
                      htmlFor="terms"
                      className="text-xs font-medium text-gray-500"
                    >
                      Tick this if your channel will contain explicit language,
                      sexual content, violent content, sensitive or obscene
                      topics that will be inappropriate for viewers under the
                      age of 18.
                    </label>
                  </div>
                </div>
                <div class="border-t border-gray-300"></div>
                <div></div>
                <h2 className="text-xs font-semibold  text-gray-500">
                  Additional Details
                </h2>
                <div className="flex flex-row -ml-6 w-18 px-8 ">
                  <button
                    className={`flex items-center  hover:bg-blue-600 h-12 hover:text-white hover:font-semibold ${styles.bluecol} font-bold w-30 py-2 px-2 border connect-wallet-button rounded-lg`}
                  >
                    <span
                      className={`${styles.bluecol} mr-2 text-sm font-extrabold`}
                    >
                      &#43;
                    </span>
                    <span className={`${styles.bluecol} mr-2 text-sm `}>
                      Connect Wallet / Creat Wallet
                    </span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium pl-2 text-gray-700"
                  >
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
                  <div className="mt-6 mx-10">
                    <button
                      type="submit"
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${styles.bluebg} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      onClick={handleCreateAccountClick}
                      ref={emailRef}
                    >
                      Create Account
                    </button>
                  </div>
                  {showVerification && (
                    <div
                      id="pop-up"
                      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
                    >
                      <div className="flex items-center justify-between px-2 -ml-6 py-2 ">
                        <button
                          className={`text-black absolute rounded-3xl border bg-white ${styles.cross}  -mt-96 hover:text-gray-500`}
                          onClick={() => {
                            // get a reference to the signup div
                            const signupDiv = document.getElementById("pop-up");
                            // close the signup div by setting its display property to "none"
                            signupDiv.style.transform = "translateX(-200em)";
                            setShowVerification(false);

                          }}
                        >
                          <XIcon className="h-3 w-3 m-2" />
                        </button>
                      </div>
                      <div className="bg-white w-2/6 h-96 rounded-lg flex flex-col items-center justify-center">
                        <FiLock className="text-blue-500 text-6xl" />
                        <h2 className="text-xl font-semibold mt-4">
                          Authenticate your account
                        </h2>
                        <p className="text-sm mt-2 mx-16 text-center">
                          Protecting your account is our first priority. Please
                          provide the verification code sent to {email} for
                          confirming your account.
                        </p>
                        <div className="flex mt-4 space-x-4">
                          {code.map((value, index) => (
                            <input
                              key={index}
                              type="text"
                              value={value}
                              maxLength={1}
                              className="w-12 h-12 bg-gray-300 text-center font-mono text-lg border border-gray-200 rounded-lg"
                              onChange={(event) =>
                                handleCodeChange(event, index)
                              }
                              onKeyUp={(event) => handleKeyUp(event, index)}
                              ref={(input) =>
                                (inputRefs.current[index] = input)
                              }
                            />
                          ))}
                        </div>
                        <div className="flex mt-4 space-x-4">
                          <button
                            className="flex items-center px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                            onClick={handleResendClick}
                          >
                            Resend
                          </button>
                          <button
                            className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                            onClick={handleSubmitClick}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
