// Complete the Index page component for Michael Gruen's personal website
// Use chakra-ui for styling and components
import { Box, Flex, Text, Button, Image, VStack, Link, Heading } from "@chakra-ui/react";
import { FaGamepad, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.800" minH="100vh" p={5}>
      <Flex direction="column" align="center" justify="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1602009774427-659d0ec644d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNaWNoYWVsJTIwR3J1ZW58ZW58MHx8fHwxNzE0MDYyMTM4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Michael Gruen" mb={4} />
        <Heading as="h1" size="xl" color="white" mb={2}>
          Michael Gruen
        </Heading>
        <Text fontSize="lg" color="gray.300" mb={4}>
          Entrepreneur | Speaker | Visionary
        </Text>
        <VStack spacing={3} mb={5}>
          <Link href="https://twitter.com/michaelgruen" isExternal>
            <Button leftIcon={<FaTwitter />} colorScheme="twitter" _hover={{ transform: "scale(1.05)" }}>
              Twitter
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/michaelgruen" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" _hover={{ transform: "scale(1.05)" }}>
              LinkedIn
            </Button>
          </Link>
          <Link href="https://instagram.com/michaelgruen" isExternal>
            <Button leftIcon={<FaInstagram />} colorScheme="pink" _hover={{ transform: "scale(1.05)" }}>
              Instagram
            </Button>
          </Link>
        </VStack>
        <Button leftIcon={<FaGamepad />} colorScheme="purple" size="lg" _hover={{ transform: "scale(1.05)" }} onClick={() => (window.location.href = "/game")}>
          Play Interactive Game
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
