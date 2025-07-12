import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-slate-800 drop-shadow-lg">
          Welcome to
        </h1>
        <h2 className="text-5xl font-extrabold text-indigo-700 drop-shadow-md">
          Personal Finance Tracker
        </h2>
        <button className="mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-2xl shadow-lg transition duration-300">
          <NavLink  to="/budget" >Get Started</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Home;
