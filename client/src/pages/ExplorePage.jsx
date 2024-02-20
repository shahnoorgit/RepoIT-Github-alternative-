import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Spinner from "../Components/Spinner";
import Repos from "../Components/Repos";

const ExplorePage = () => {
  const [Loading, setLoading] = useState(false);
  const [repos, setrepos] = useState([]);
  const [SelectedLanguage, setSelectedLanguage] = useState("");
  const explore = async (lan) => {
    setSelectedLanguage(lan);
    lan;
    setLoading(true);
    setrepos([]);
    try {
      const myres = await fetch(`/api/explore/repos/${lan}`);
      myres;
      const { repos } = await myres.json();
      setrepos(repos);
    } catch (error) {
      toast.error(error.message);
      error;
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <img
            onClick={() => explore("javaScript")}
            src="/javascript.svg"
            alt="JavaScript"
            className="h-11 sm:h-20 cursor-pointer"
          />
          <img
            onClick={() => explore("typescript")}
            src="/typescript.svg"
            alt="TypeScript logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
          <img
            onClick={() => explore("C++")}
            src="/c++.svg"
            alt="C++ logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
          <img
            onClick={() => explore("python")}
            src="/python.svg"
            alt="Python logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
          <img
            onClick={() => explore("java")}
            src="/java.svg"
            alt="Java logo"
            className="h-11 sm:h-20 cursor-pointer"
          />
        </div>
        {repos?.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
              {SelectedLanguage.toUpperCase()}{" "}
            </span>
            Repositories
          </h2>
        )}
        {!Loading && repos?.length > 0 && (
          <center>
            <Repos alwaysfullwidth repos={repos} />
          </center>
        )}
        {Loading && <Spinner />}
      </div>
    </div>
  );
};

export default ExplorePage;
