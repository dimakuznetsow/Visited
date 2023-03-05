import { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <main className="md:h-screen md:bg-sky-500 md:dark:bg-slate-800 md:overflow-x-hidden">
        <div className="md:pt-20 ">
          <form
            className="bg-white p-6 rounded-lg  w-full max-w-sm mx-auto"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-medium mb-5">Log in</h3>
            <div className="mt-5">
              {" "}
              <label className="block text-gray-700 font-medium mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-lg"
                type="email"
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-lg"
                type="password"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </div>
            <button
              disabled={isLoading}
              className="w-full bg-sky-500 dark:bg-slate-800 text-white p-2 rounded-lg hover:bg-sky-600 dark:hover:bg-slate-600 mt-8"
            >
              Log in
            </button>

            {error && (
              <div className="mt-3 w-full border border-red-500 bg-red-50 text-red-500 py-2 px-3 rounded-lg">
                {error}
              </div>
            )}
          </form>
        </div>
        <div className="pt-2 flex justify-center md:bg-sky-500 md:dark:bg-slate-800">
          <span className="mr-2 md:text-white">Don't have an account?</span>
          <Link
            className="text-sky-500 md:text-slate-800 md:underline md:dark:no-underline md:dark:text-sky-500"
            to="/signup"
          >
            Sign up!
          </Link>
        </div>
      </main>
    </>
  );
}

export default Login;
