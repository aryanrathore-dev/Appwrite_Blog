import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto lg:max-w-full py-8 max-w-[350px]">
      <div
        className={`mx-auto w-full max-w-lg bg-slate-100 hover:to-teal-300 rounded-xl p-10 border border-black/40`}
      >
        <div className="mb-2 flex justify-center">
          <span className="w-full justify-center flex">
            <Logo className="w-[60px] mb-5" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Login to your account
        </h2>
        <p className="mt-2 text-center text-lg text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />

            {/* Functionality to reset password */}
            <div
              className="text-right text-sm text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-sky-800 via-purple-500 to-indigo-400 hover:from-sky-900 hover:via-purple-600 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all duration-200"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;