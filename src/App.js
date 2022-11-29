import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  HomePage,
  BabysitterPage,
  FamilyPage,
  BabysitterDetailsPage,
  FamilyDetailsPage,
  MyProfilePage,
} from "./pages";
import { NavBar } from "./components";

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
        <Route path="/babysitters" element={<BabysitterPage />} />
        <Route path="/babysitters/:id" element={<BabysitterDetailsPage />} />
        <Route path="/families" element={<FamilyPage />} />
        <Route path="/families/:id" element={<FamilyDetailsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/me" element={<MyProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
