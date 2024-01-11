import React, { useEffect, useRef, useState } from "react";
import WorkingImg from "../assets/working.svg";
import NeatSkillsLogo from "../assets/neatskillslogosample.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, googleSignIn } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timerId = null;
    onAuthStateChanged(auth, (user_) => {
      if (user_) {
        localStorage.setItem("email", user_.email);
        navigate("/beta/dashboard");
      } else {
        localStorage.removeItem("email");
        timerId = setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    });

    return () => {
      if (!timerId) {
        clearTimeout(timerId);
      }
    };
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    const token_ = await googleSignIn();
    if (token_) {
      navigate("/beta/dashboard");
    } else {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      alert("Email and Password are mandatory!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        alert("Account successfully created! please login");
        navigate("/beta/login");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  if (loading) {
    return (
      <div className="w-[100vw] min-h-[100vh] bg-[#0D0E14] grid items-center z-[-2] text-center text-white font-sans">
        <h1 className="font-bold text-6xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-[100vw] min-h-[100vh] bg-[#0D0E14] grid grid-cols-2 items-center z-[-2] text-center text-white font-sans">
      <div className="left__img flex flex-col items-center">
        <img src={NeatSkillsLogo} alt="" />
        <div>
          <img src={WorkingImg} alt="" className="w-[460px] z-[5] absolute" />
          <div className="w-[450px] h-[431px] bg-violet-700 z-[0] rounded-[50%] filter blur-[200px]"></div>
        </div>
      </div>
      <div className="right__form m-auto md:mt-auto  md:w-[35vw] py-[2rem]">
        <div className="rounded-[25px] py-8 w-full bg-[#15161B] md:bg-[#ffffff05] px-[3rem]  space-y-2 ">
          <h1 className="md:mt-[30px] md:text-2xl">Get started for free</h1>
          <p className="text-white text-xl pb-5 ">
            Already have an account{" "}
            <NavLink to={"/beta/login"} className="text-pink-600">
              Login
            </NavLink>
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="flex w-[90%] transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg md:w-[80%] m-auto py-2 md:text-sm text-xs  text-white align-middle items-center justify-center gap-2 xl:p-[10px] lg:p-1.5px  border-[1px]  border-white rounded-lg"
          >
            <i className="fa-brands fa-google"></i>
            Continue with Google
          </button>
          <br />
          <hr />
          <br />
          <div className="flex rounded-[15px]  bg-[#ffffff05] items-center px-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="2.5vh"
              width="2.5vh"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
            </svg>
            <input
              type="email"
              placeholder="Enter your email...."
              className="input text-2xl md:p-3 p-[20px] pr-10 focus:border-transparent focus:outline-none rounded-lg  bg-transparent  w-[100%]"
              ref={emailRef}
              data-temp-mail-org="0"
            />
          </div>
          <div className="flex rounded-[15px]  bg-[#ffffff05] items-center px-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="2.5vh"
              width="2.5vh"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
            </svg>
            <input
              type="password"
              placeholder="Enter your password..."
              className="input text-2xl md:p-3 p-[20px] pr-10 focus:border-transparent focus:outline-none rounded-lg  bg-transparent  w-[100%]"
              ref={passwordRef}
              data-temp-mail-org="0"
            />
          </div>
          <button
            className="bg-[#E1348B] transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg md:w-[100%] w-[50%] p-2   rounded-[10px]"
            onClick={handleSignUp}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
