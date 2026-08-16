import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import InformationPage from "./pages/InformationPage.jsx";

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar
        activePage={page}
        setPage={setPage}
        isLoggedIn={isLoggedIn}
      />

      {page === "home" && <HomePage />}
      {page === "login" && (
        <LoginPage
          onLogin={() => {
            setIsLoggedIn(true);
            setPage("home");
          }}
        />
      )}
      {page === "profile" && isLoggedIn && <ProfilePage />}
      {(page === "information" || page === "development") && <InformationPage />}

      <div
        className="position-fixed bottom-0 start-0 bg-light border p-2"
        style={{ zIndex: 999 }}
      >
        Debug: current page = {page} | inloggad = {isLoggedIn ? "ja" : "nej"}
      </div>
    </>
  );
}

export default App;