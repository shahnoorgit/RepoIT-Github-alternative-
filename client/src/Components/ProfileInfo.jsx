import { IoLocationOutline } from "react-icons/io5";
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserFollowLine,
} from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberSince } from "../utils/functions";
import LikedProfile from "./LikedProfile";

const ProfileInfo = ({ userProfile }) => {
  const member_since = formatMemberSince(userProfile?.created_at);
  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 lg:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4">
        <div className="flex gap-4 items-center">
          {/* User Avatar */}
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={userProfile?.avatar_url}
              className="rounded-md w-24 h-24 mb-2"
              alt=""
            />
          </a>
          {/* View on Github */}
          <div className="flex gap-2 items-center flex-col">
            <LikedProfile userProfile={userProfile} />
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View on Github
            </a>
          </div>
        </div>

        {/* User Bio */}
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p className="text-sm"> {userProfile?.bio.substring(0, 60)} </p>
          </div>
        ) : null}

        {/* Location */}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            {userProfile?.location}
          </div>
        ) : null}

        {/* Twitter Username */}
        {userProfile?.twitter_username ? (
          <a
            href={`https://twitter.com/${userProfile.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-sky-500"
          >
            <FaXTwitter />
            {userProfile?.twitter_username}
          </a>
        ) : null}

        {/* Member Since Date */}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Member since</p>
          <p className="">{member_since}</p>
        </div>

        {/* Email Address */}
        {userProfile?.email && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Email address</p>
            <p className="">{userProfile.email}</p>
          </div>
        )}

        {/* Full Name */}
        {userProfile?.name && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Full name</p>
            <p className="">{userProfile?.name}</p>
          </div>
        )}

        {/* Username */}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Username</p>
          <p className="">{userProfile?.login}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mx-4">
        {/* Followers Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {userProfile?.followers}</p>
        </div>

        {/* Following count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.following}</p>
        </div>

        {/* Number of public repos */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public repos: {userProfile?.public_repos}</p>
        </div>

        {/* Number of public gists */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public gists: {userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
