import { Avatar, Button, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../src/components/layout/sidebar/Sidebar.container";
import Head from "next/head";

const Topbar = () => {
  return (
    <>
      <SideBar />
      <Flex bg="gray.100" h="81px" w="100%" align="center" p={5}>
        <Avatar src="" marginEnd={3} />
        <Heading size="lg" color="black">
          user@gmail.com
        </Heading>
      </Flex>
    </>
  );
};

const Bottombar = () => {
  return (
    <FormControl p={3}>
      <Input placeholder="입력을 해주세요..." />
      <Button type="submit" hidden autoComplete="off">
        확인
      </Button>
    </FormControl>
  );
};

export default function Chat() {
  return (
    <>
      <Head>
        <title>ChatApp</title>
      </Head>
      <Flex h="100vh">
        <SideBar />
        <Flex
          // bg="blue.100"
          flex={1}
          direction="column"
        >
          <Topbar />

          <Flex flex={1} direction="column" pt={4} mx={5}>
            <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
              <Text> This is a dummy message</Text>
            </Flex>
            <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
              <Text> This is a dummy message</Text>
            </Flex>
            <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
              <Text> This is a dummy message</Text>
            </Flex>
          </Flex>

          <Bottombar />
        </Flex>
      </Flex>
    </>
  );
}
