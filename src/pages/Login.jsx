import React, { useState } from "react";
import im from "../assets/images/bg.jpg"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userpassword="12345678";
  const useremail="test@gmail.com";

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [errors,setErrors]=useState({});

  const navigate=useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    const errors=validate({email,password})

    if (Object.keys(errors).length===0) {
      localStorage.setItem("user",JSON.stringify({email,password,username:"Test"}))
      setErrors({})
      navigate("/")
    }else{
      setErrors(errors);
    }
    
  }
  const validate=(values)=>{
    const errors={}
    if (!values.email) {
      errors.email="This Field is Required"
    }else if (values.email!==useremail) {
      errors.email="Email Does Not Found"
    }
    if (!values.password) {
      errors.password="This Field is Required"
      
    }else if (values.password!==userpassword) {
      errors.password="The Password is Incorrect"
      
    }
    return errors;
  };

  return (
    <div className=" bg bg-cover bg-center" >
      <div className="flex items-center min-h-screen " style={{marginLeft:"800px"}}>
        <div className="w-full max-w-md p-8 bg-[rgba(224,224,218,0.5)]  rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-fuchsia-400 text-center mb-4">
            Annas library
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Your one stop library.
          </p>

          <form className="mb-20" onSubmit={handlesubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email or Phone
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email or Phone"
                className="w-full p-3 border border-amber-950 rounded-lg"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              {errors.email&&<p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-3 border  border-amber-950 rounded-lg"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                
              />
              {errors.password&&<p className="text-red-500">{errors.password}</p>}

            </div>

            <button
              type="submit"
              className="w-full py-3 bg-fuchsia-400 text-white rounded-lg hover:bg-fuchsia-500"
            >
              Login
            </button>

            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 text-sm">
                Forgot password?
              </a>
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="text-green-500">
                Create new account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
