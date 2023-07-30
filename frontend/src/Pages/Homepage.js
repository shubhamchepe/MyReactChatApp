import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect,useState,useRef } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

function Homepage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xf71111,
          midtoneColor: 0xf91111,
          lowlightColor: 0x1b1729,
          baseColor: 0x4a3434,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="10xl" centerContent ref={myRef}>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            Shubham Chepe
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
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
    </Container>
  );
}

export default Homepage;
