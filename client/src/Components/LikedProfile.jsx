import { useAuthContext } from "../Context/Authcontext";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-hot-toast";

const LikedProfile = ({ userProfile }) => {
  const { authUser } = useAuthContext();
  userProfile;

  const handleLikeProfile = async () => {
    try {
      const res = await fetch(`/api/user/like/${userProfile.login}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      data;

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (!authUser) return null;
  return (
    <button
      onClick={handleLikeProfile}
      className="p-2 text-xs w-full font-medium rounded-md bg-glass border border-blue-400 flex items-center gap-2"
    >
      <FaHeart size={16} /> Like Profile
    </button>
  );
};

export default LikedProfile;
