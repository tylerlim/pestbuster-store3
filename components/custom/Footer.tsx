import React from 'react';
// import { 
//   Box, 
//   Container, 
//   Stack, 
//   Text, 
//   IconButton, 
//   Flex 
// } from '@chakra-ui/react';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { colorPalettes } from "@/components/compositions/color-palettes"
// import { Button } from "@/components/ui/button"
import { Box, SimpleGrid, Text, Link, Stack, Badge } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Product Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Overview</a></li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 inline-flex items-center">
                  Features
                  <Badge className="ml-2 bg-gray-900 text-white text-xs">New</Badge>
                </a>
              </li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Releases</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Law Enforcement</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Status</a></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Dribbble</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Logoipsum. All rights reserved
          </p>
        </div>
      </div>
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
