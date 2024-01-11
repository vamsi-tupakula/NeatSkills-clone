import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import NeatSkillsLogo from "../assets/neatskillslogosample.svg";
import RightArrow from "../assets/rightarrow.webp";
import HatImg from "../assets/images_hat.webp";

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
      <div className="w-[100vw] h-[auto] min-h-[100vh] bg-[#0D0E14] grid items-center z-[-2] text-center text-white font-sans">
        <h1 className="font-bold text-6xl">Loading...</h1>
      </div>
    );
  }
  return (
    <section className="w-full h-[100vh] min-h-[1050px] bg-[#0D0E14] flex flex-col items-center justify-center text-white font-sans">
      <div className="flex w-full h-[100%] bg-[#141518]">
        <div className="sidebar w-[5%] min-w-[250px] flex flex-col gap-5">
          <div className="w-[100%] my-3 flex items-center justify-center">
            <img src={NeatSkillsLogo} alt="" className="w-[90%] " />
          </div>
          <div className="tab w-[80%] mx-auto cursor-pointer">
            <p className="align-middle">
              <div className="rect w-[13px] h-[13px] mr-[2%] bg-white inline-block"></div>{" "}
              Profile
            </p>
          </div>
          <div className="tab w-[80%] mx-auto cursor-pointer">
            <p className="align-middle">
              <div className="rect w-[13px] h-[13px] mr-[2%] bg-white inline-block"></div>{" "}
              Home
            </p>
          </div>
          <div className="tab w-[80%] mx-auto">
            <hr />
          </div>
          <div className="tab w-[80%] mx-auto cursor-pointer">
            <p className="align-middle">
              <div className="rect w-[13px] h-[13px] mr-[2%] bg-white inline-block"></div>{" "}
              Courses
            </p>
          </div>
          <div className="tab w-[80%] mx-auto cursor-pointer">
            <p className="align-middle">
              <div className="rect w-[13px] h-[13px] mr-[2%] bg-white inline-block"></div>{" "}
              Schedule
            </p>
          </div>
          <div className="tab w-[80%] mx-auto cursor-pointer">
            <p className="align-middle">
              <div className="rect w-[13px] h-[13px] mr-[2%] bg-white inline-block"></div>{" "}
              Study Material
            </p>
          </div>
          <div className="tab w-[80%] mx-auto cursor-pointer">
            <p className="align-middle">
              <div className="rect w-[13px] h-[13px] mr-[2%] bg-white inline-block"></div>{" "}
              Assignment
            </p>
          </div>
          <div className="tab w-[80%] my-10 mx-auto cursor-pointer">
            <p className="align-middle">
              <div className="rect w-[13px] h-[13px] mr-[2%] bg-white inline-block"></div>{" "}
              Chats
            </p>
          </div>
          <div className="w-[80%] flex flex-col gap-5 mb-2 mx-auto bg-[#2E3036] p-5 rounded-lg">
            <p className="align-middle text-wrap text-2xl font-bold">
              Discord Community
            </p>
            <button className="bg-pink-600 px-3 py-2 rounded-lg cursor-pointer">
              Join
            </button>
          </div>
          <div className="w-[80%] flex flex-col items-center mb-2 mx-auto bg-[#2E3036] p-3 rounded-lg cursor-pointer">
            <p>LOGOUT</p>
          </div>
          <div className="w-[80%] flex flex-col items-center mb-2 mx-auto bg-[#2E3036] p-3 rounded-lg cursor-pointer">
            <p>SETTINGS</p>
          </div>
        </div>
        <div className="main bg-[#2E3036] w-[90%] rounded-tl-[4rem] rounded-bl-[4rem] overflow-hidden flex flex-col py-2">
          <nav className="w-[100%] border-b-2 h-[100px] flex items-center justify-between px-10">
            <div className="left">
              <p className="text-3xl font-semibold">MY PROGRESS</p>
            </div>
            <div className="right flex items-center gap-5 text-3xl">
              <div className="bell">
                <i className="fa-solid fa-bell"></i>
              </div>
              <div className="profile ">
                <i className="fa-regular fa-user"></i>
              </div>
              <button
                onClick={handleLogout}
                className="text-lg bg-pink-600 px-3 py-2 rounded-lg border-2 hover:scale-[1.02] transition-transform duration-150"
              >
                LOGOUT
              </button>
            </div>
          </nav>
          <div className="details__pane grid grid-cols-3 p-5">
            <div className="col-span-2">
              <div className="w-[100%] gradientPinkToViolet h-[150px] rounded-2xl flex items-center justify-between px-10">
                <div className="text flex flex-col gap-3">
                  <p className="text-2xl font-bold">
                    0% off on All Subscription
                  </p>
                  <p>Check Youtube Meanwhile</p>
                </div>
                <div className="arrow bg-[#8d8d8d] p-3 rounded-lg">
                  <img src={RightArrow} alt="" />
                </div>
              </div>
              <div className="progress px-5 py-7">
                <div className="flex justify-between">
                  <p className="font-bold text-xl">
                    Welcome,{" "}
                    {localStorage
                      .getItem("email")
                      .slice(0, localStorage.getItem("email").length - 10)}
                    👋
                  </p>
                  <p className="font-bold text-lg">0%</p>
                </div>
                <div className="bar w-[100%] bg-[#141518] h-[10px] my-3 rounded-lg"></div>
                <div className="text-md">Work Progress</div>
              </div>
              <div className="px-5">
                <div className="flex justify-between items-center mb-5">
                  <p className="text-lg">Students can view these courses</p>
                  <button className="p-3 border-2">View All</button>
                </div>
                <div className="cards grid grid-cols-3 gap-3">
                  <div className="card bg-black border-2 p-4 rounded-xl flex">
                    <div className="left w-[75%] text-sm">
                      <img src={HatImg} alt="" />
                      <p className="text-[0.5rem] text-[#ececec]">COURSE</p>
                      <p>Christmas Update going on!</p>
                      <p className="text-[0.5rem] text-[#ececec]">
                        Christmas Update going on!
                      </p>
                    </div>
                    <div className="right w-[25%] flex items-end justify-end">
                      <button className="px-3 py-2 border-2 border-pink-600">
                        Explore
                      </button>
                    </div>
                  </div>
                  <div className="card bg-black border-2 p-4 rounded-xl flex">
                    <div className="left w-[75%] text-sm">
                      <img src={HatImg} alt="" />
                      <p className="text-[0.5rem] text-[#ececec]">COURSE</p>
                      <p>Christmas Update going on!</p>
                      <p className="text-[0.5rem] text-[#ececec]">
                        Christmas Update going on!
                      </p>
                    </div>
                    <div className="right w-[25%] flex items-end justify-end">
                      <button className="px-3 py-2 border-2 border-pink-600">
                        Explore
                      </button>
                    </div>
                  </div>
                  <div className="card bg-black border-2 p-4 rounded-xl flex">
                    <div className="left w-[75%] text-sm">
                      <img src={HatImg} alt="" />
                      <p className="text-[0.5rem] text-[#ececec]">COURSE</p>
                      <p>Christmas Update going on!</p>
                      <p className="text-[0.5rem] text-[#ececec]">
                        Christmas Update going on!
                      </p>
                    </div>
                    <div className="right w-[25%] flex items-end justify-end">
                      <button className="px-3 py-2 border-2 border-pink-600">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="calendar flex flex-col gap-5 pl-5">
              <div className="bg-[#373A41] w-[100%] h-[350px] rounded-xl"></div>
              <div className=" w-[100%] h-[100px] bg-pink-300 rounded-2xl flex flex-col justify-center items-start p-10">
                <button className="py-1 px-2 bg-violet-700 border border-black rounded-sm">
                  Dialy Tip
                </button>
                <p className="text-black mx-1 my-2">Live a life</p>
              </div>
              <div className="bg-[#373A41] w-[100%] h-[250px] rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
