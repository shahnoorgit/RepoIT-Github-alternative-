import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LikesPage from "./pages/LikesPage";
import ExplorePage from "./pages/ExplorePage";
import Sidebar from "./Components/Sidebar";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/Authcontext";
function App() {
  const { authUser, loading } = useAuthContext();
  if (loading) return null;
  return (
    <div className=" flex text-white">
      <Sidebar />
      <div className=" flex-1 max-w-5xl text-white my-5 mx-auto transition-all duration-300">
        <Routes>
          <Route path="/" element={<HomePage auth={authUser} />} />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignupPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/likes"
            element={authUser ? <LikesPage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/explore"
            element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
