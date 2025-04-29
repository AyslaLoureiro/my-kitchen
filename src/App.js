import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import * as auth from "./utils/auth";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import RecipeList from "./components/RecipeList";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (data) => {
    setIsLoggedIn(true);
  };
  const logout = (data) => {
    setIsLoggedIn(false);
    auth.removeToken();
  };
  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ isLoggedIn, login, logout }}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Header
                  onSignUpOpenClick={setIsSignUpOpen}
                  onSignInOpenClick={setIsSignInOpen}
                />
                <Main />
                <RecipeList />
                <About />
                <Profile />
                {isSignUpOpen ? (
                  <Signup
                    isOpen={isSignUpOpen}
                    onClose={() => setIsSignUpOpen(false)}
                    setIsSignInOpen={setIsSignInOpen}
                  />
                ) : null}
                {isSignInOpen ? (
                  <Signin
                    isOpen={isSignInOpen}
                    onClose={() => setIsSignInOpen(false)}
                    setIsSignUpOpen={setIsSignUpOpen}
                  />
                ) : null}
              </div>
            }
          />
          {/* <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          ></Route> */}
          <Route
            path="/signup"
            element={
              <Signup
                isOpen={isSignUpOpen}
                onClose={() => setIsSignUpOpen(false)}
                setIsSignInOpen={setIsSignInOpen}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <Signin
                isOpen={isSignInOpen}
                onClose={() => setIsSignInOpen(false)}
                setIsSignUpOpen={setIsSignUpOpen}
              />
            }
          />
        </Routes>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
