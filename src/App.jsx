import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import LookForPhotograph from "./pages/LookForPhotograph/LookForPhotograph";
import PhotographDashboard from "./pages/PhotographDashboard/PhotographDashboard";
import AuthForm from "./components/AuthForm/AuthForm";
import Register from "./pages/Register/Register";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
