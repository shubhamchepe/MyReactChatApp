import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";
import { Button, IconButton,Image,Flex } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  console.log(chats)

  const toast = useToast();


  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={0}
      bg="#0E2036"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth={{ base: "unset", md: "1px" }}
      maxW={{ base: "100%", md: "31%" }} // Set max width to 100% for mobile and 31% for larger screens
      flexGrow={{ base: 1, md: "unset" }}
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "25px", md: "30px" }}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        color="#fff"
        backgroundColor="#0E2036"
        justifyContent="space-between"
        alignItems="center"
      >
        Messages
        <GroupChatModal>
          <IconButton
            display="flex"
            backgroundColor="#18E2AB"
            color="#fff"
            marginTop={2}
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            icon={<AddIcon />}
          ></IconButton>
        </GroupChatModal>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#0E2036"
        w="100%" // Set width to 100% for both mobile and larger screens
        flexGrow="1" // Use flexGrow to make it fill the available space
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                display="flex" // Use display="flex" instead of flexDirection="row"
                alignItems="center"
                al
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Box flexDirection="column">
                  <Image
                    borderRadius="full"
                    boxSize="30px"
                    marginRight={2}
                    src={
                      chat.users[0].pic !== user.pic
                        ? chat.users[0].pic
                        : chat.users[1].pic
                    }
                    alt={user.name}
                  />
                </Box>
                <Box flexDirection="column">
                  <Text isTruncated maxWidth="200px">
                    {!chat.isGroupChat
                      ? getSender(loggedUser, chat.users)
                      : chat.chatName}
                  </Text>

                  {chat.latestMessage && (
                    <Text fontSize="xs" isTruncated maxWidth="200px">
                      <b>{chat.latestMessage.sender.name} : </b>
                      {chat.latestMessage.content.length > 50
                        ? chat.latestMessage.content.substring(0, 51) + "..."
                        : chat.latestMessage.content}
                    </Text>
                  )}
                </Box>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
