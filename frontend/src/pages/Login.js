import { useState } from "react";
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
    <div className="md:flex items-center justify-center h-screen">
      <form
        className="bg-white p-6 rounded-lg md:border border-sky-600 w-full max-w-sm mx-auto"
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
          className="w-full bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 mt-8"
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
  );
}

export default Login;
