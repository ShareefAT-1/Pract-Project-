import { Routes,Route } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Allbooks from "./components/Allbooks";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Search/> */}
      {/* <Details/> */}
      {/* <Login/> */}
      {/* <Profile/> */}
      {/* <Allbooks/> */}
      {/* <About/> */}
      <Footer/>

        <Routes>
          
{/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/allbooks" element={<Allbooks/>}/>
          <Route path="/bookdetails/:id" element={<Details/>}/> */}
        </Routes>
    </>
  );
}

export default App;
