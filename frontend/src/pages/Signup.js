import { useState } from "react";
import { Link } from "react-router-dom";

import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await signup(name, email, password);
  };

  return (
    <>
      <main className="md:h-screen md:bg-sky-500 md:dark:bg-slate-800 md:overflow-x-hidden">
        <div className="md:pt-20">
          <form
            className="bg-slate-50 p-6 rounded-lg  w-full max-w-sm mx-auto"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-medium">Sign up</h3>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-lg"
                type="text"
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
            </div>
            <div className="mt-4">
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
              Sign up
            </button>
            {error && (
              <div className="mt-3 w-full border border-red-500 bg-red-50 text-red-500 py-2 px-3 rounded-lg">
                {error}
              </div>
            )}
          </form>
        </div>
        <div className="mt-2 flex justify-center">
          <span className="mr-2 md:text-white">Already have an account?</span>
          <Link
            className="text-sky-500 md:text-slate-800 md:underline md:dark:no-underline md:dark:text-sky-500"
            to="/login"
          >
            Log in!
          </Link>
        </div>
      </main>
    </>
  );
}

export default Signup;
