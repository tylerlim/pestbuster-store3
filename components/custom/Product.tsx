import { Box, Image, Text, Button, Stack, Badge } from "@chakra-ui/react";

const ProductPage = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Image src="path/to/your/image.jpg" alt="Product Image" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            9 variations &bull; 335ml
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          truncate
        >
          Emerald Deep Moisture Glow Oil
        </Box>

        <Box>
          A beautiful, long-misunderstood plant whose true powers are just starting to be known. What we know so far is that its many parts and constituents aid in everything from anxiety to physical pain management to beautifying properties.
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Button colorScheme="teal" size="sm">
            Add To Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
