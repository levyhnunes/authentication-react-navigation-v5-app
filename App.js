import React, { useState, useEffect } from "react";

import { AuthContext } from "./src/services/context";
import Routes from "./src/routes";
import { isSignedIn } from "./src/services/authentication";
import { Splash } from "./src/pages/Splash";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    async function getToken() {
      setAuthenticated(await isSignedIn());
    }
    getToken();
  }, []);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setAuthenticated(true);
      },
      signUp: () => {
        setIsLoading(false);
        setAuthenticated(false);
      },
      signOut: () => {
        setIsLoading(false);
        setAuthenticated(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Routes authenticated={authenticated} />
    </AuthContext.Provider>
  );
}
