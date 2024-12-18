import React from "react";
import { Box, Button, Grid, GridItem, Heading, Image, Text, VStack, HStack } from "@chakra-ui/react";

const ProductPage2 = () => {
  return (
    <Box maxW="100%" p={4}>
      {/* Top Section */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} alignItems="center">
        {/* Left Content */}
        <VStack align="flex-start" >
          <Heading size="lg" color="gray.800">
            Emerald Deep <Text as="span" color="green.400">Moisture Glow Oil</Text>
          </Heading>
          <Text fontSize="md" color="gray.600">
            A beautiful, long-misunderstood plant whose true powers are just starting to be known. 
            From anxiety relief to physical pain management, discover its benefits.
          </Text>
          <Button colorScheme="green" size="lg">Add To Cart</Button>
        </VStack>

        {/* Right Image */}
        <Box position="relative" textAlign="center">
          <Image src="/path-to-product-image.jpg" alt="Emerald Glow Oil" borderRadius="md" />
          <Box
            position="absolute"
            top="5"
            right="5"
            w="full"
            h="full"
            border="4px solid"
            borderColor="green.400"
            zIndex="-1"
          />
        </Box>
      </Grid>

      {/* Product Features */}
      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={6} my={12} textAlign="center">
        <GridItem>
          <Text fontWeight="bold">Material</Text>
          <Text color="gray.600">European Spruce</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold">Finishing</Text>
          <Text color="gray.600">Durable Dark Finish</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" color="green.400">100% Organic</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" color="green.400">9 Variations</Text>
        </GridItem>
      </Grid>

      {/* About Us Section */}
      <Box textAlign="center" my={12}>
        <Heading size="md" mb={4}>About Us</Heading>
        <Text maxW="600px" mx="auto" color="gray.600">
          Meet Emerald, the green goddess of facial oils. Our formula provides rich moisture for a lit-from-within glow, in a lightweight, quick-absorbing formula.
        </Text>
      </Box>

      {/* Decorative Section */}
      <HStack  justify="center" align="center">
        <Image src="/path-to-green-leaf-image.png" alt="Green Leaf" boxSize="100px" />
        <Heading size="lg" color="gray.700">Best Cosmetic Products</Heading>
      </HStack>
    </Box>
  );
};

export default ProductPage2;
