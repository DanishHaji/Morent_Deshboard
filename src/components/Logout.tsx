import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove login status from localStorage
    localStorage.removeItem("isLoggedIn");
    router.push("/login"); // Redirect to login page
  };

  return (
    <button
      className="w-full bg-red-500 text-white py-2 rounded-lg mt-4"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
