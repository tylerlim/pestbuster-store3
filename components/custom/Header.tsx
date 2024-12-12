import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      className="dark"
    //   bg={bgColor}
      px={4}
      py={2}
      borderBottom="1px solid"
    //   borderColor={borderColor}
      width="100%"
    >
      <Flex alignItems="center" maxW="1440px" mx="auto">
        <Heading size="md">
          <Link href="/">Xplore</Link>
        </Heading>

        <Spacer />

        <Flex>
          <Link href="/travel-guide" px={4}>
            Travel Guide
          </Link>
          <Link href="/famous-places" px={4}>
            Famous Places
          </Link>
          <Link href="/contact-us" px={4}>
            Contact Us
          </Link>
          <Link href="/bookings" px={4} color="pink.500">
            Bookings
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;