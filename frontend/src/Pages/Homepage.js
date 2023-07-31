import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { useEffect,useState,useRef } from "react";
import { useHistory } from "react-router";
import { Global, css } from "@emotion/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";


function Homepage() {
  const history = useHistory();



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <>
      <Global
        styles={css`
          html {
            overflow: hidden;
          }
          body {
            overflow: hidden;
            height: 100vh;
          }
        `}
      />
      <Container maxW="10xl" centerContent>
        <Box
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={3}
          bg={{ base: "#0E2036", md: "white" }} // White background on both mobile and desktop view
          w={{ base: "100vw", md: "auto" }} // Full width on mobile view, auto width on desktop view
          minH={{ base: "100vh", md: "auto" }} // Full height on mobile view, auto height on desktop view
          m={{ base: "10px 0 10px 0", md: "40px 0 15px 0" }} // Adjust margins for different screen sizes
          borderRadius="lg"
        >
          <Text
            fontSize={{ base: "5xl", md: "4xl" }}
            fontFamily="Anton"
            color={{ base: "#fff", md: "#000" }}
          >
            ONBVN
          </Text>
          <Tabs
            isFitted
            variant="soft-rounded"
            w="100%"
            mt="15px"
          >
            <TabList mb="1em">
              <Tab color={{ base: "#fff", md: "#000" }}>Login</Tab>
              <Tab color={{ base: "#fff", md: "#000" }}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
}

export default Homepage;
