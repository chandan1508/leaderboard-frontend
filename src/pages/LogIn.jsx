
import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";


const LogIn = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (values.email === "" || values.password === "") {
        alert("All fields are required");
        return;
      }

      const response = await axios.post(
        "https://leaderboard-backend-6h44.onrender.com/api/auth/login",
        values
      );

      // console.log(response);

      localStorage.setItem("token", response.data.token);

      navigate("/leaderboard");

    } catch (error) {
     
      alert(error.response?.data?.message);
      
    }
  };

  return (
    <div className="h-screen bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">LogIn</p>
        <div className="mt-4">
          <div>
            <label htmlFor="email" className="text-zinc-400">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Email"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="text-zinc-400">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Password"
              name="password"
              required
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <button
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded"
              onClick={handleSubmit}
            >
              LogIn
            </button>
            <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
              Or
            </p>
            <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
              Don’t have an account? &nbsp;
              <Link to="/SignUp" className="hover:text-blue-500 text-white">
                <u>SignUp</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
