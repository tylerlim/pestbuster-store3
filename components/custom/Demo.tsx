import React from 'react';
import { 
  Box, 
  Container, 
  Stack, 
  Text, 
  IconButton, 
  Flex 
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { colorPalettes } from "@/components/compositions/color-palettes"
import { Button } from "@/components/ui/button"

// import { Flex,Heading, SimpleGrid, Box, HStack } from "@chakra-ui/react"
// import { DecorativeBox } from "@/components/compositions/decorative-box"

const Footer = () => {
  return (
    <Box 
      as="footer" 
      role="contentinfo" 
      bg="gray.50" 
      color="gray.700"
      borderTop="1px" 
      borderColor="gray.200"
      p={6}
    >
      <Container 
        as={Stack} 
        maxW={'6xl'} 
        py={4} 
      >
        <Text fontSize="lg" fontWeight="bold">
          Your Company Name
        </Text>
        
        <Stack direction={'row'}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Contact</Text>
        </Stack>
      </Container>


      <Box 
        borderColor="gray.200"
        py={4}
      >
        <Container 
          as={Flex} 
          maxW={'6xl'} 
          justifyContent={'space-between'} 
          alignItems={'center'}
        >
          <Text>
            © 2024 Your Company. All rights reserved
          </Text>
          
          <Button  colorPalette={colorPalettes}>
            <IconButton
              as="a"
          
              aria-label="GitHub"
         
            />
            <IconButton
              as="a"
      
              aria-label="LinkedIn"
           
            />
            <IconButton
              as="a"
    
              aria-label="Twitter"
         
            />
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
