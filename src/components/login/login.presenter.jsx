import Head from "next/head";
import React from "react";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import GithubLogin from "./login.github";
import GoogleLogin from "./login.google";

const LoginUi = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center h="100vh">
        <Stack align="center" bgColor="gray.600" p={16} rounded="3xl" spacing={12} boxShadow="lg">
          <Box bgColor="blue.500" w="fit-content" p={5} rounded="3xl">
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          <GoogleLogin />
          <GithubLogin />
        </Stack>
      </Center>
    </>
  );
};

export default LoginUi;
