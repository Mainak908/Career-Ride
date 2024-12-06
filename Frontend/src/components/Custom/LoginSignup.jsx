import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import email_icon from "../../assets/email.png";
import pass_icon from "../../assets/password.png";
import user_icon from "../../assets/person.png";
import { AuthContext } from "../../provider";
import { Button } from "../ui/button";
import Header from "./Header";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [isLogin, setLogin] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const { loggedIn, setLoggedIn, setUser } = useContext(AuthContext);
  useEffect(() => {
    if (loggedIn) navigate("/dashboard");
    return;
  }, [loggedIn]);

  const Signinfunc = async () => {
    const data = await axios.post(
      `${apiUrl}/api/v1/loginRoute`,
      {
        username: email,
        password: pass,
      },
      { withCredentials: true }
    );
    if (data.data.error) return toast(data.data.error);

    toast(data.data.message);
    setLoggedIn(true);
    setUser(data.data.user);
  };

  const Signupfunc = async () => {
    const data = await axios.post(`${apiUrl}/api/v1/signupRoute`, {
      name,
      username: email,
      password: pass,
    });
    if (data.status === 201) {
      toast("Signup Successfully");

      setTimeout(() => {
        setLogin(!isLogin);
      }, 2000);

      return;
    }
    toast(data.data.message);
  };

  return (
    <>
      <Header className=" sticky top-0 left-0 w-full bg-white z-50" />

      <div>
        <div className="container flex flex-col m-auto mt-[0px] pb-[30px]">
          <div className=" flex flex-col items-center gap-[9px] mt-[30px]">
            <div className=" text-[#9f5bff] text-[36px] font-bold">
              {isLogin ? "Sign In" : "Sign Up"}
            </div>
            <div className=" w-[80px] h-[6px] bg-[#9f5bff] rounded-lg"></div>
          </div>
          <div className="mt-[55px] flex flex-col gap-6">
            {!isLogin ? (
              <div className="flex items-center m-auto w-[480px] h-20 bg-slate-100 rounded-lg">
                <img src={user_icon} className=" mt-0 mb-0 mr-7 ml-7" />
                <input
                  type="text"
                  className="h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            <div className="flex items-center m-auto w-[480px] h-20 bg-slate-100 rounded-lg">
              <img src={email_icon} className=" mt-0 mb-0 mr-7 ml-7" />
              <input
                type="email"
                className="h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="flex items-center m-auto w-[480px] h-20 bg-slate-100 rounded-lg ">
              <img src={pass_icon} className=" mt-0 mb-0 mr-7 ml-7" />
              <input
                type="password"
                className="h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer"
                placeholder="Enter your Password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
              />
            </div>
          </div>
          <div className="pl-[30%] mt-[27px] text-[#797979]">
            Forgot Password?{" "}
            <span className=" text-[#9f5bff] cursor-pointer">Reset</span>
          </div>
          {!isLogin && (
            <div className="pl-[30%] mt-[27px] text-[#797979]">
              Already Existing User?
              <button
                className=" text-[#9f5bff] cursor-pointer"
                onClick={() => setLogin(true)}
              >
                Login
              </button>
            </div>
          )}
          <div className="flex flex-row gap-7 items-center justify-center">
            {isLogin ? (
              <>
                <Button onClick={Signinfunc}>Sign In</Button>
              </>
            ) : (
              <>
                <Button onClick={Signupfunc}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
