import "../styles/globals.css";
import "../amplifyConfig";
import { useState, useMemo, useEffect } from "react";
import Navbar from "../components/header/Navbar";
import { UserContext } from "../hooks/user/UserContext";
import { ToastContainer } from "react-toastify";
import { Auth } from "aws-amplify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function authListner() {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    }
    authListner();
  }, [setUser]);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <Navbar />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </UserContext.Provider>
  );
}

export default MyApp;
