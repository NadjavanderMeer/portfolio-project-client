import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { LoginPage, SignUpPage, HomePage } from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
