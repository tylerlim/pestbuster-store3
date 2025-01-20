import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Image,
  Icon,
  Grid,
  GridItem,
  StackProps,
} from '@chakra-ui/react';
// import { CheckCircle } from '@chakra-ui/react';

const Feature = ({ title, description }: { title: string; description: string }) => (
  <HStack align="flex-start" >
    <Icon  w={6} h={6} color="orange.300" />
    <Box>
      <Text fontWeight="bold" fontSize="lg" color="darkgreen">
        {title}
      </Text>
      <Text color="gray.600" fontSize="md">
        {description}
      </Text>
    </Box>
  </HStack>
);

const FeaturesSection = () => {
  const features = [
    {
      title: 'Original Products',
      description: 'This is one of the most exciting advantages we have. Order now and you will know.',
    },
    {
      title: 'Long-Lasting Peace of Mind',
      description: 'Enjoy 90 Days of Uninterrupted, Reliable Defense',
    },
    {
      title: 'Advanced Science Meets Nature',
      description: 'A Powerful, Plant-Based Solution for a Safer Tomorrow',
    },
    {
      title: 'Effortless Protection, Zero Fuss',
      description: 'No Mess, No Stress—Just Simple, Effective Use',
    },
    {
      title: 'Protection That Cares for Your Loved Ones',
      description: 'Gentle on the Environment, Safe for Your Family',
    },
    {
      title: '',
      description: '',
    },
    // {
    //   title: '',
    //   description: '',
    // },
  ];

  return (
    <Container maxW="container.xl" py={16}>
      <VStack gap={12 as any}>
        <Box textAlign="center">
          <Text fontSize="sm" fontWeight="medium" color="gray.600">
            FEATURES
          </Text>
          <Heading
            as="h2"
            fontSize="3xl"
            color="darkgreen"
            mt={2}
          >
            Complete Features You Get
          </Heading>
        </Box>

        <Grid
          templateColumns={{ base: '1fr', 
            // lg: 'repeat(2, 1fr)' 
            lg: '1fr 300px 1fr'
          }}
          gap={8}
           alignItems="center"
          // position="relative"
        >
          {/* Left Features */}
          <Grid gap={8}>
          {/* <VStack 
           gap={8 as any}
          align="stretch"> */}
            {features.slice(0, 3).map((feature, index) => (
              <Box key={index}>
                <Text fontSize="md" fontWeight="semibold" color="gray.700">
                  {feature.title}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {feature.description}
                </Text>
              </Box>
            ))}
            </Grid>
          {/* </VStack> */}
          {/* {features.slice(0, 3).map((feature, index) => (
          <GridItem key={index}>
            <VStack align="stretch" >
            <Text fontSize="md" fontWeight="semibold" color="gray.700">
                  {feature.title}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {feature.description}
                </Text>
            </VStack>
          </GridItem>
            ))} */}
          {/* Center Image */}
          <Box
            width="full"
            height={{ base: '300px', lg: '300px' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/images/frog.svg"
              alt="Green Tree Frog"
              objectFit="contain"
              width="100%"
              height="100%"
            />
          </Box>
          {/* <Box
              position={{ base: 'relative', lg: 'absolute' }}
              left={{ lg: '50%' }}
              top={{ lg: '50%' }}
              transform={{ lg: 'translate(-50%, -50%)' }}
              width={{ base: 'full', lg: '300px' }}
              height={{ base: '300px', lg: '300px' }}
              mx="auto"
              my={{ base: 8, lg: 0 }}
            >
              <Image
                src="/images/frog.svg"
                alt="Green Tree Frog"
                objectFit="contain"
                width="100%"
                height="100%"
              />
            </Box> */}

          {/* Right Features */}
          <Grid gap={8}>
          {/* <VStack gap={8 as any} align="stretch"> */}
            {features.slice(3).map((feature, index) => (
              <Box key={index}>
                <Text fontSize="md" fontWeight="semibold" color="gray.700">
                  {feature.title}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {feature.description}
                </Text>
              </Box>
            ))}
          {/* </VStack> */}
          </Grid>
        </Grid>
      </VStack>
          {/* {features.slice(3,6).map((feature, index) => (
          <GridItem key={index}>
            <VStack align="stretch" >
            <Text fontSize="md" fontWeight="semibold" color="gray.700">
                  {feature.title}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {feature.description}
                </Text>
            </VStack>
          </GridItem>
            ))} 
        </Grid>
      </VStack> */}
    </Container>
  );
};

export default FeaturesSection;