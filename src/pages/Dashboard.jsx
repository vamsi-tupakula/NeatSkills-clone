import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("signout successfull");
      })
      .catch((error) => {
        console.log("Error While Signing Out");
      });
  };

  useEffect(() => {
    let timerId = null;
    onAuthStateChanged(auth, (user_) => {
      if (user_) {
        localStorage.setItem("email", user_.email);
        timerId = setTimeout(() => {
          setLoading(false);
        }, 200);
      } else {
        localStorage.removeItem("email");
        navigate("/beta/login");
      }
    });

    return () => {
      if (!timerId) {
        clearTimeout(timerId);
      }
    };
  }, [navigate]);

  if (loading) {
    return (
      <div className="w-[100vw] min-h-[100vh] bg-[#0D0E14] grid items-center z-[-2] text-center text-white font-sans">
        <h1 className="font-bold text-6xl">Loading...</h1>
      </div>
    );
  }
  return (
    <section className="w-full min-h-[1000px] h-[100vh] bg-[#0D0E14] flex flex-col items-center justify-center px-10 text-white font-sans">
      <h1 className="text-6xl">
        Welcome,{" "}
        <span className="text-pink-600 font-bold">
          {localStorage.getItem("email")}
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="my-4 px-4 py-3 bg-pink-600 border-2 rounded-lg hover:scale-[1.10] transition-transform duration-150"
      >
        Logout
      </button>
    </section>
  );
}

export default Dashboard;
