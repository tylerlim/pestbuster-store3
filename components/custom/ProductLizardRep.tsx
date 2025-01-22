import React from "react";
import { Box, Flex, Grid, Heading, Image, Text,
  VStack, 
  // GridItem, 
  Container,

 } from "@chakra-ui/react";
import { promises as fs } from 'fs';
// import { 
//   HomeIcon, 
//   BuildingIcon, 
//   DropletIcon,
// } from 'lucide-react';

// import content from "@/components/resource/ItemLizardRep.json";

// Reusable Component for Coverage Cards
const CoverageCard = ({ title, areas, bgColor }: { title: string; areas: string[]; bgColor: string }) => (
  <Box bg={bgColor} p={6} borderRadius="lg">
    <Flex alignItems="center" mb={4}>
      <Heading size="lg">{title}</Heading>
    </Flex>
    {areas.map((area) => (
      <Text key={area} pl={11} mb={1}>
        • {area}
      </Text>
    ))}
  </Box>
);


async function ProductLizardRep() {
  const residentialAreas = [
    '700sqft', 
    'Kitchen counters', 
    'Pantry shelves', 
    'Bathroom windows', 
    'Bedroom corners', 
    'Behind picture frames', 
    'On top of refrigerator'
  ];

  const commercialAreas = [
    'Food preparation areas', 
    'Storage rooms', 
    'Reception zones', 
    'Warehouse corners', 
    'Office equipment spaces'
  ];

  const targetCustomers = [
    'Homeowners', 
    'Property Managers', 
    'Restaurateurs', 
    'Facility Managers', 
    'Hoteliers', 
    'Warehouse Operators'
  ];
  const file = await fs.readFile(process.cwd() + '/app/resource/LizardRep.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <Box bg="white" color="gray.700" maxW="100vw" mx="auto">
      {/* Header Section */}
      <Flex direction={{ base: "column", lg: "row" }} align="center" justify="space-between" p="8" gap="6">
        {/* Left Section */}
        <Box flex="1">
          <Text fontSize="sm" color="gray.500">
            {data.header.availability}
          </Text>
          <Heading fontSize="4xl" lineHeight="1.2">
            {data.header.title}
            <Text as="span" color="green.400">
              {" "}
              {data.header.subtitle}
            </Text>
          </Heading>
          <Text mt="4" fontSize="md">
            {data.header.description}
          </Text>
        </Box>
        {/* Right Section */}
        <Box position="relative">
          <Image
            src={data.header.image} // Replace with actual product image
            alt="Lizard Rep Product"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
      </Flex>

      {/* Coverage Section */}
      <Container maxW="container.xl" py={10}>
        <VStack align="stretch" py={6}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              Lizard Rep
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Natural Lizard Repellent Solution
            </Text>
          </Box>

          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={6}>
            <CoverageCard title="Residential Coverage" areas={residentialAreas} bgColor="green.50" />
            <CoverageCard title="Commercial Coverage" areas={commercialAreas} bgColor="blue.50" />
            <CoverageCard title="Perfect For" areas={targetCustomers} bgColor="purple.50" />
          </Grid>
        </VStack>
      </Container>

      {/* How It Works Section */}
      <Box bg="gray.100" p={6} borderRadius="lg" textAlign="center">
        <Heading size="lg" mb={4}>
          How It Works
        </Heading>
        <VStack align="stretch" py={3}>
          <Text>• Made from natural repellent properties of Neem and Elderflower</Text>
          <Text>• Creates an invisible barrier that effectively deters lizards</Text>
          <Text>• No harsh chemicals or messy applications</Text>
        </VStack>
      </Box>

      {/* Simple Application Section */}
      <Box bg="green.100" p={6} borderRadius="lg" textAlign="center" mt={6}>
        <Heading size="lg" mb={4}>
          Simple Application
        </Heading>
        <VStack py={2}>
          <Text>1. Identify problem areas</Text>
          <Text>2. Tear off the back sticker</Text>
          <Text>3. Place Lizard Rep cube</Text>
          <Text fontWeight="bold" color="green.700">
            Enjoy 90-days of lizard-free environment!
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

//   return (
//     <Box bg="white" color="gray.700" maxW="100vw" mx="auto">
//       {/* Header Section */}
//       <Flex
//         direction={{ base: "column", lg: "row" }}
//         align="center"
//         justify="space-between"
//         p="8"
//         gap="6"
//       >
//         {/* Left Section */}
//         <Box flex="1">
//           <Text fontSize="sm" color="gray.500">
//             {data.header.availability}
//             {/* AVAILABLE ON ONLINE STORES */}
//           </Text>
//           <Heading fontSize="4xl" lineHeight="1.2">
//             {data.header.title}
//             {/* Emerald Deep */}
//             <Text as="span" color="green.400">
//               {" "}
//               {data.header.subtitle}
//               {/* Moisture Glow Oil */}
//             </Text>
//           </Heading>
//           <Text mt="4" fontSize="md">
//             {data.header.description}
//             {/* A beautiful, long-misunderstood plant whose true powers are just
//             starting to be known. What we know so far is that its many parts and
//             constituents aid in everything from anxiety to physical pain
//             management to beautifying properties. */}
//           </Text>
//           {/* <Button
//             mt="6"
//             bg="green.400"
//             color="white"
//             size="lg"
//             _hover={{ bg: "green.500" }}
//           >
//             Add To Cart
//           </Button> */}
//         </Box>
//         {/* Right Section */}
//         <Box position="relative">
//           <Image
//             src={data.header.image} // Replace with actual product image
//             alt="Emerald Glow Oil"
//             borderRadius="md"
//             boxShadow="lg"
//           />
//           <Box
//             position="absolute"
//             top="-10"
//             left="-10"
//             w="100px"
//             h="100px"
//             border="2px solid green.400"
//           />
//         </Box>
//       </Flex>

//       {/* Info Grid */}
//       <Grid
//         templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
//         gap="6"
//         p="8"
//         bg="gray.50"
//         textAlign="center"
//       >
//         {data.infoGrid.map((item: { title: string; subtitle: string }, index: number) => (
//           <Box key={index}>
//             <Text fontSize="lg" fontWeight="bold" color="green.500">
//               {item.title}
//             </Text>
//             <Text>{item.subtitle}</Text>
//           </Box>
//         ))}
//       </Grid>

//       <Container maxW="container.xl" py={10}>
//       <VStack  align="stretch">
//         <Box textAlign="center">
//           <Heading as="h1" size="2xl" mb={4}>
//             Lizard Rep
//           </Heading>
//           <Text fontSize="xl" color="gray.600">
//             Natural Lizard Repellent Solution
//           </Text>
//         </Box>

//         <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap={6}>
//           <GridItem>
//             <Box bg="green.50" p={6} borderRadius="lg">
//               <Flex alignItems="center" mb={4}>
//                 {/* <Icon as={HomeIcon} w={8} h={8} color="green.500" mr={3}/> */}
//                 <Heading size="lg">Residential Coverage</Heading>
//               </Flex>
//               {residentialAreas.map((area) => (
//                 <Text key={area} pl={11} mb={1}>
//                   • {area}
//                 </Text>
//               ))}
//             </Box>
//           </GridItem>

//           <GridItem>
//             <Box bg="blue.50" p={6} borderRadius="lg">
//               <Flex alignItems="center" mb={4}>
//                 {/* <Icon as={BuildingIcon} w={8} h={8} color="blue.500" mr={3}/> */}
//                 <Heading size="lg">Commercial Coverage</Heading>
//               </Flex>
//               {commercialAreas.map((area) => (
//                 <Text key={area} pl={11} mb={1}>
//                   • {area}
//                 </Text>
//               ))}
//             </Box>
//           </GridItem>

//           <GridItem>
//             <Box bg="purple.50" p={6} borderRadius="lg">
//               <Flex alignItems="center" mb={4}>
//                 {/* <Icon as={DropletIcon} w={8} h={8} color="purple.500" mr={3}/> */}
//                 <Heading size="lg">Perfect For</Heading>
//               </Flex>
//               {targetCustomers.map((customer) => (
//                 <Text key={customer} pl={11} mb={1}>
//                   • {customer}
//                 </Text>
//               ))}
//             </Box>
//           </GridItem>
//         </Grid>

//         <Box bg="gray.100" p={6} borderRadius="lg">
//           <Heading size="lg" mb={4} textAlign="center">
//             How It Works
//           </Heading>
//           <VStack align="stretch">
//             <Flex alignItems="center">
//               {/* <Icon as={DropletIcon} w={6} h={6} color="teal.500" mr={3}/> */}
//               <Text>
//                 Made from natural repellent properties of Neem and Elderflower
//               </Text>
//             </Flex>
//             <Flex alignItems="center">
//               {/* <Icon as={DropletIcon} w={6} h={6} color="teal.500" mr={3}/> */}
//               <Text>
//                 Creates an invisible barrier that effectively deters lizards
//               </Text>
//             </Flex>
//             <Flex alignItems="center">
//               {/* <Icon as={DropletIcon} w={6} h={6} color="teal.500" mr={3}/> */}
//               <Text>
//                 No harsh chemicals or messy applications
//               </Text>
//             </Flex>
//           </VStack>
//         </Box>

//         <Box bg="green.100" p={6} borderRadius="lg" textAlign="center">
//           <Heading size="lg" mb={4}>
//             Simple Application
//           </Heading>
//           <VStack >
//             <Text>1. Identify problem areas</Text>
//             <Text>2. Tear off the back sticker</Text>
//             <Text>3. Place Lizard Rep cube</Text>
//             <Text fontWeight="bold" color="green.700">
//               Enjoy 90-days of lizard-free environment!
//             </Text>
//           </VStack>
//         </Box>
//       </VStack>
//     </Container>

//       {/* About Us Section */}
//       {/* <Box textAlign="center" py="10" px="6">
//         <Heading>About Us</Heading>
//         <Text maxW="600px" mx="auto" mt="4">
//           {data.aboutUs.description}
//         </Text>
//       </Box> */}

//       {/* Bottom Banner */}
//       <Flex justify="center" align="center" py="10" bg="gray.100" gap="4">
//         <Image
//           src="https://via.placeholder.com/100" // Replace with plant image
//           alt="Plant Image"
//           w="100px"
//         />
//         <Heading fontSize="2xl">
//           {data.banner.text} {/* Best Cosmetic Products*/}</Heading>
//       </Flex>
//     </Box>
//   );
// };

export default ProductLizardRep;
