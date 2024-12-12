import React from 'react';
// import { 
//   Box, 
//   Container, 
//   Stack, 
//   Text, 
//   IconButton, 
//   Flex 
// } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { colorPalettes } from "@/components/compositions/color-palettes"
import { Button } from "@/components/ui/button"
import { Box, SimpleGrid, Text, Link, Stack, Badge } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
  <Box bg="gray.100" color="gray.700" py={10} w="full">
    <SimpleGrid columns={[2, null, 4]} gap={8} px={10}>
      <Stack align="flex-start">
        <Text fontWeight="bold" mb={2}>
          Product
        </Text>
        <Link href="#">Overview</Link>
        <Link href="#">
          Features <Badge colorScheme="green">New</Badge>
        </Link>
        <Link href="#">Tutorials</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Releases</Link>
      </Stack>
      <Stack align="flex-start">
        <Text fontWeight="bold" mb={2}>
          Company
        </Text>
        <Link href="#">About Us</Link>
        <Link href="#">Press</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Contact Us</Link>
        <Link href="#">Partners</Link>
      </Stack>
      <Stack align="flex-start">
        <Text fontWeight="bold" mb={2}>
          Legal
        </Text>
        <Link href="#">Cookies Policy</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Law Enforcement</Link>
        <Link href="#">Status</Link>
      </Stack>
      <Stack align="flex-start">
        <Text fontWeight="bold" mb={2}>
          Follow Us
        </Text>
        <Link href="#">Facebook</Link>
        <Link href="#">Twitter</Link>
        <Link href="#">Dribbble</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">LinkedIn</Link>
      </Stack>
    </SimpleGrid>
    <Box textAlign="center" mt={10}>
      <Text fontSize="sm">© 2022 Chakra Templates. All rights reserved</Text>
      <Text mt={2} fontWeight="bold">
        logoipsum
      </Text>
    </Box>
  </Box>
</footer>
  );
};

// import { Flex,Heading, SimpleGrid, Box, HStack } from "@chakra-ui/react"
// import { DecorativeBox } from "@/components/compositions/decorative-box"

// const Footer = () => {
//   return (
//     <Box 
//       as="footer" 
//       role="contentinfo" 
//       bg="gray.50" 
//       color="gray.700"
//       borderTop="1px" 
//       borderColor="gray.200"
//       p={6}
//     >
//      <Container 
//         as={Stack} 
//         maxW={'6xl'} 
//         py={4} 
//       >
//         <Text fontSize="lg" fontWeight="bold">
//           Your Company Name
//         </Text>
        
//         <Stack direction={'row'}>
//           <Text>Home</Text>
//           <Text>About</Text>
//           <Text>Services</Text>
//           <Text>Contact</Text>
//         </Stack>
//       </Container>
//       <Box 
//         borderColor="gray.200"
//         py={4}>

// <Container 
//           as={Flex} 
//           maxW={'6xl'} 
//           justifyContent={'space-between'} 
//           alignItems={'center'}>
//              <Text>
//             © 2024 Your Company. All rights reserved
//           </Text>
//           <Button  >
//           <IconButton
//               as="a"
          
//               aria-label="GitHub"
         
//             />
//             <IconButton
//               as="a"
      
//               aria-label="LinkedIn"
           
//             />
//             <IconButton
//               as="a"
    
//               aria-label="Twitter"
         
//             />
//           </Button>
//            </Container>
//        </Box>
//     </Box>
//   );
// };

export default Footer;
