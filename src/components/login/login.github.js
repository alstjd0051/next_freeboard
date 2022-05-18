import { Button } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

const GithubLogin = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  return (
    <Button boxShadow="md" onClick={() => signInWithGithub("", { prompt: "select_account" })}>
      Sign In With Github
    </Button>
  );
};

export default GithubLogin;
