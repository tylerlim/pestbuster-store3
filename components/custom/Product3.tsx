import React from "react";
import { Box, Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { promises as fs } from 'fs';
// import content from "@/components/resource/ItemLizardRep.json";



async function ProductPage3() {
  const file = await fs.readFile(process.cwd() + '/app/resource/LizardRep.json', 'utf8');
  const data = JSON.parse(file);
  return (
    <Box bg="white" color="gray.700" maxW="100vw" mx="auto">
      {/* Header Section */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        p="8"
        gap="6"
      >
        {/* Left Section */}
        <Box flex="1">
          <Text fontSize="sm" color="gray.500">
            {data.header.availability}
            {/* AVAILABLE ON ONLINE STORES */}
          </Text>
          <Heading fontSize="4xl" lineHeight="1.2">
            {data.header.title}
            {/* Emerald Deep */}
            <Text as="span" color="green.400">
              {" "}
              {data.header.subtitle}
              {/* Moisture Glow Oil */}
            </Text>
          </Heading>
          <Text mt="4" fontSize="md">
            {data.header.description}
            {/* A beautiful, long-misunderstood plant whose true powers are just
            starting to be known. What we know so far is that its many parts and
            constituents aid in everything from anxiety to physical pain
            management to beautifying properties. */}
          </Text>
          {/* <Button
            mt="6"
            bg="green.400"
            color="white"
            size="lg"
            _hover={{ bg: "green.500" }}
          >
            Add To Cart
          </Button> */}
        </Box>

        {/* Right Section */}
        <Box position="relative">
          <Image
            src="https://via.placeholder.com/300" // Replace with actual product image
            alt="Emerald Glow Oil"
            borderRadius="md"
            boxShadow="lg"
          />
          <Box
            position="absolute"
            top="-10"
            left="-10"
            w="100px"
            h="100px"
            border="2px solid green.400"
          />
        </Box>
      </Flex>

      {/* Info Grid */}
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap="6"
        p="8"
        bg="gray.50"
        textAlign="center"
      >
        <Box>
          <Text fontWeight="bold" color="green.400">
            100% Organic
          </Text>
          <Text>INGREDIENTS</Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="green.400">
            9 variations
          </Text>
          <Text>FLAVORS</Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="green.400">
            335ml
          </Text>
          <Text>VOLUME</Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="green.400">
            Free
          </Text>
          <Text>DELIVERY</Text>
        </Box>
      </Grid>

      {/* About Us Section */}
      <Box textAlign="center" py="10" px="6">
        <Heading>About Us</Heading>
        <Text maxW="600px" mx="auto" mt="4">
          {data.aboutUs.description}
          {/* Meet Emerald, the green goddess of facial oils. Emerald Deep Moisture
          Glow Oil provides skin with rich moisture and a glow that is lit – all
          in a lightweight, quick-absorbing formula. All hail, Queen Emerald. */}
        </Text>
      </Box>

      {/* Bottom Banner */}
      <Flex justify="center" align="center" py="10" bg="gray.100" gap="4">
        <Image
          src="https://via.placeholder.com/100" // Replace with plant image
          alt="Plant Image"
          w="100px"
        />
        <Heading fontSize="2xl">Best Cosmetic Products</Heading>
      </Flex>
    </Box>
  );
};

export default ProductPage3;
