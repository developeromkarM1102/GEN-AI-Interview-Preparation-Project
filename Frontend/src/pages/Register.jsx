import React from "react";
import { Link } from "react-router-dom";
import { BrainCog } from "lucide-react";
import { useAuth } from "../Features/Auth/Hooks/useAuth";
import { useState } from "react";
import Loading from "../components/Loading";

const Register = () => {

    const { loading , handleRegister } = useAuth()

    const [username , setUsername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
    const handleSubmit = async (e) =>{
      e.preventDefault()
      await handleRegister({ username , email , password})
      alert("Registration successful!")
      navigate("/")
  
    }
    if(loading){
      return <Loading/>
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">

      <div className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-lg">

        <div className="flex items-center justify-center gap-2 mb-6">
          <BrainCog className="text-orange-500" />
          <h1 className="text-xl font-bold text-orange-500">GEN-AI Prep</h1>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange-500 outline-none"
          />

          <input onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange-500 outline-none"
          />

          <input onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange-500 outline-none"
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-medium transition duration-200 hover:scale-105">
            Register
          </button>

        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;
