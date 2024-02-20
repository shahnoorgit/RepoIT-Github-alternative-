import { MdLogout } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../Context/Authcontext";
// TODO Implement Logout functionality

const Logout = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const handlelogout = async () => {
    try {
      const res = fetch("/api/auth/logout", { credentials: "include" });
      const data = (await res).json();
      data;
      setAuthUser(null);
    } catch (error) {
      error;
      toast.error("logout failed");
    }
  };
  return (
    <>
      <img
        src={authUser.avatarUrl}
        className="w-10 h-10 rounded-full border border-gray-800"
      />

      <div
        onClick={handlelogout}
        className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800"
      >
        <MdLogout size={22} />
      </div>
    </>
  );
};

export default Logout;
