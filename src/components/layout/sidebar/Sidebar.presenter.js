import { Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import getOtherEmail from "../../util/getOtherEmail";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

export default function SideBarUI() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const router = useRouter();

  const redirect = (id) => {
    router.push(`/char/${id}`);
  };

  const chatExists = (email) =>
    chats?.find(
      (chat) => chat.users.includes(user.email) && chat.users.includes(email)
    );

  const newChat = async () => {
    const input = prompt("Enter Email of chat recipient");

    if (!chatExists(input) && input != user.email) {
      await addDoc(collection(db, "chats"), { users: [user.email, input] });
    }
  };
  const chatList = () => {
    return chats
      ?.filter((chat) => chat.users.includes(user.mail))
      .map(
        <Flex
          key={Math.random()}
          p={3}
          align="center"
          _hover={{ bg: "gray.100", cursor: "pointer" }}
          onClick={() => redirect(chat.id)}
        >
          <Avatar src="" marginEnd={3} />
          <Text>{getOtherEmail(chat.users, user)}</Text>
        </Flex>
      );
  };

  <Flex
    // bg="blue.100"
    h="100%"
    w="300px"
    borderEnd="1px solid"
    borderColor="gray.200"
    direction="column"
  >
    <Flex
      // bg="red.100"
      h="81px"
      w="100%"
      align="center"
      justifyContent="space-between"
      p={3}
      borderBottom="1px soild "
      borderColor="gray.200"
    >
      <Flex align="center">
        <Avatar src={user.photoURL} marginEnd={3} />
        <Text>{user.displayName} </Text>
      </Flex>
      <IconButton
        size="sm"
        isRound
        icon={<ArrowLeftIcon />}
        onClick={() => signOut(auth)}
      />
    </Flex>
    <Button m={5} p={4} onClick={() => newChat()}>
      New Chat
    </Button>
    <Flex
      overflowX="scroll"
      direction="column"
      sx={{ scrollbarWidth: "none" }}
      flex={1}
    >
      {chatList()}
    </Flex>
  </Flex>;
}
