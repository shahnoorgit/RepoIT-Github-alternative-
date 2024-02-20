import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handlewithgithub = () => {
    window.open("/api/auth/github", "_self");
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold  md:text-2xl text-center">
            Login to your account
          </h1>
          <button
            onClick={handlewithgithub}
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 
						focus:outline-none focus:ring-[#24292F]/50 
              font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center"
          >
            <FaGithub className="w-5 h-5" />
            Login with Github
          </button>
          <p className="text-sm font-light text-gray-500">
            {"Don't"} have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary-600 hover:underline text-blue-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
