import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/beta/login");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="w-[100vw] min-h-[100vh] bg-[#0D0E14] grid items-center z-[-2] text-center text-white font-sans">
        <h1 className="font-bold text-6xl">Loading...</h1>
      </div>
    );
  }
  return (
    <section className="w-full min-h-[1000px] h-[100vh] bg-[#0D0E14] flex items-center justify-center px-10">
      <h1 className="text-8xl text-white font-sans">
        Welcome to <span className="text-pink-600 font-bold">Dashboard</span>
      </h1>
    </section>
  );
}

export default Dashboard;
