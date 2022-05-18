import { Button } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Button boxShadow="md" onClick={() => signInWithGoogle("", { prompt: "select_account" })}>
      Sign In With Google
    </Button>
  );
};

export default GoogleLogin;
