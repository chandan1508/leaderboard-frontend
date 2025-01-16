import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const [Values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Values.name === "" ||
        Values.email === "" ||
        Values.password === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "https://leaderboard-backend-6h44.onrender.com/api/auth/register/",
          Values
        );

        // console.log("signup success");
        alert("Signup Successful")
        
        navigate("/LogIn");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-screen bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">Sign Up</p>
        <div className="mt-4">
          <div>
            <label htmlFor="" className="text-zinc-400">
              Name
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="name"
              name="name"
              required
              value={Values.name}
              onChange={change}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-zinc-400">
              Email
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="xyz@example.com"
              name="email"
              required
              value={Values.email}
              onChange={change}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-zinc-400">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="password"
              name="password"
              required
              value={Values.password}
              onChange={change}
            />
          </div>
          
          <div className="mt-4">
            <button
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded"
              onClick={submit}
            >
              SignUp
            </button>
            <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
              Or
            </p>
            <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
              Already have an account? &nbsp;
              <Link to="/login" className="hover:text-blue-500 text-white">
                <u>LogIn</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
