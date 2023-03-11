import React from "react";

import Lock from "public/svg/lock";
import User from "public/svg/user";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="rounded-2xl shadow-lg shadow-grey-500 h-[50%] w-[50%] flex flex-col items-center">
        <span className=" text-2xl">Login</span>
        <div className="relative my-10 border-solid border-b-[2px] border-b-orange-300 ">
          <input className="peer/input w-full outline-none p-5 text-m" type="text" required />
          <div className="label peer-focus/input:top-[-10px] ">Email</div>
          <div className="icon">
            <User width={"17px"} />
          </div>
        </div>
        <div className="relative my-10 border-solid border-b-[2px] border-b-orange-300 ">
          <input className="peer/input w-full outline-none p-5 text-m" type="password" required />
          <div className="label peer-focus/input:top-[-10px]">Password</div>
          <div className="icon">
            <Lock width={"17px"} />
          </div>
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
