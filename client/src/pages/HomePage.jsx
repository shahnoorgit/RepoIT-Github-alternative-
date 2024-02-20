import { toast } from "react-hot-toast";
import Search from "../Components/Search";
import SortRepos from "../Components/SortRepos";
import ProfileInfo from "../Components/ProfileInfo";
import Repos from "../Components/Repos";
import Spinner from "../Components/Spinner";
import { useEffect, useState, useCallback } from "react";
const HomePage = ({ auth }) => {
  const [Loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [userProfile, setuserProfile] = useState(null);
  const [sortType, setsortType] = useState("recent");
  const getUserProfileAndRepos = useCallback(
    async (username = "shahnoorgit") => {
      setLoading(true);
      try {
        const res = await fetch(`/api/user/profile/${username}`);

        const { repos, user } = await res.json();

        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first

        setRepos(repos);
        setuserProfile(user);

        return { user, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setuserProfile(null);

    const obj = await getUserProfileAndRepos(username);
    obj;

    const { user, repos } = await getUserProfileAndRepos(username);

    user, repos;
    setRepos(repos);
    setuserProfile(user);
    setLoading(false);
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count); //descending, most stars first
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count); //descending, most forks first
    }
    setsortType(sortType);
    setRepos([...repos]);
  };
  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {!auth && (
        <div className="flex items-center bg-glass rounded-lg p-4 justify-between my-5">
          <img src="/github.svg" />
          <h1 className="text-white  ">
            Hey there Welcome To RepoIT,
            <br /> Im shahnoor creator of this amamzing Platform !,
            <br /> below is my Repo ,<br /> Please Login from your Git Account
            and enjoy all the Features Of RepoIT
          </h1>
        </div>
      )}
      {repos.length > 0 && <SortRepos sortType={sortType} onSort={onSort} />}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !Loading && <ProfileInfo userProfile={userProfile} />}

        {!Loading && <Repos repos={repos} />}
        {Loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
