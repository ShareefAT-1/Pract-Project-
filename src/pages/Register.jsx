import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();
  const handleform=(e)=>{
    e.preventDefault();
  }
  return (
    <div className=" reg-bg bg-cover bg-center" >
      <div className="flex items-center min-h-screen " style={{marginLeft:"50px"}}>
        <div className="w-full max-w-md p-8 bg-[rgba(253,142,86,0.2)]  rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            Annas Library
          </h1>
          <p className="text-center text-cyan-950 mb-8">
            Your one stop library.
          </p>
          <form className="mb-20" onSubmit={handleform}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-emerald-950">
                Email or Phone
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email or Phone"
                className="w-full p-3 border border-amber-950 outline-none rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-emerald-950">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-3 border  border-amber-950 outline-none rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            >
              Register
            </button>

            <div className="mt-4 text-center">
              <a href="#" className="text-fuchsia-950 text-sm">
                Forgot password?
              </a>
            </div>

            <button className="mt-3 ml-[152px] bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded"
           onClick={() => navigate("/login")}>
            Login
          </button>

            <div className="mt-4 text-center">
              <a href="#" className="">
                Welcome to Annas Library
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register