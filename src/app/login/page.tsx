'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";  // Use from next/navigation

const Login = () => {
  const router = useRouter(); // Now this will work with Next.js app directory
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded login credentials (You can replace with API in real-world scenarios)
  const correctUsername = "admin";
  const correctPassword = "admin123";

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      // Save the login status in a cookie
      document.cookie = "isLoggedIn=true; path=/"; // Set cookie with path to '/' to make it accessible globally
      router.push("/"); // Redirect to the dashboard (or home page)
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
