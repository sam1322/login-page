import React from "react";

import Lock from "public/svg/lock";
import User from "public/svg/user";
import GoogleIcon from "public/svg/google.svg";
import background from "public/images/background.jpg";
import Image from "next/image";

const Login = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-black "
      // style={{
      //   backgroundImage: `url(${background.src})`,
      //   width: '100vh',
      //   height: '100vh',
      // }}
    >
      <div className="absolute -z-10 object-cover overflow-hidden">
        <Image
          src={background}
          fill={true}
          alt={"Background Image"}
          // width="100vh"
          // height={"100vh"}
          // objectFit="cover"
          // layout="fill"
          // objectFit="cover"
          // quality={100}
          // alt=""
        />
      </div>
      {/* <Image src={background} alt="background" /> */}
      <div className="text-white rounded-2xl shadow-lg shadow-grey-500 h-[70%] w-[50%] flex flex-col items-center justify-between">
        <div className="w-[70%] flex flex-col items-center">
          <span className=" text-4xl font-semibold mt-5">Login</span>
          <div className="w-full relative my-7 border-solid border-b-[2px] border-b-orange-300 ">
            <input
              className="peer/input w-full outline-none p-3 pl-2 text-m bg-transparent"
              type="text"
              required
            />
            <div className="label peer-focus/input:top-[-0px] peer-valid/input:top-[-0px]">Email</div>
            <div className="icon">
              <User width={"17px"} />
            </div>
          </div>
          <div className="w-full relative my-7 border-solid border-b-[2px] border-b-orange-300 ">
            <input
              className="peer/input w-full outline-none p-3 pl-2 text-m bg-transparent"
              type="password"
              required
            />
            <div className="label peer-focus/input:top-[-0px]  peer-valid/input:top-[-0px]">Password</div>
            <div className="icon">
              <Lock width={"17px"} />
            </div>
          </div>
          <div className="w-full text-xs cursor-pointer flex justify-end">Forget Password ?</div>
          <div className="w-full my-5 border-solid border-[1px] border-orange-400 rounded-full flex items-center justify-center p-1 text-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer ease-in duration-300">
            Login
          </div>
          <div>Or</div>
          <div className="mt-2 flex items-center w-full bg-[#4285f4] text-white font-medium rounded-md">
            <Image src={GoogleIcon} width="50" alt="Google" />
            <span className="pl-2">Sign In with Google</span>
          </div>
        </div>
        <div className="mb-10">
          Don&apos;t have an Account ? <strong>Register</strong>
        </div>
      </div>

      <style jsx>
        {`
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .label {
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
            font-size: 1em;
            pointer-events: none;
            transition: 0.5s;
          }

          // input:focus ~ .label,
          // input:valid ~ .label {
          //   top: -10px;
          // }
          // input {
          //   width: 100%;
          //   // height: 50px;
          //   // background: transparent;
          //   // border: none;
          //   outline: none;
          //   font-size: 1em;
          //   // padding: 0 35px 0 5px;
          //   padding: 10px;
          //   // color: #fff;
          // }
          .icon {
            position: absolute;
            // left: 5px;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
          }
        `}
      </style>
    </div>
  );
};

export default Login;
