import Head from "next/head";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import SideBarUI from "../src/components/layout/sidebar/Sidebar.presenter";
import Chat from "./chat/[id]";
import Button from "../src/components/button/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ChatApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box h="100vh">
        <SideBarUI />
        <Chat />
        <Button />
      </Box>
    </div>
  );
}
