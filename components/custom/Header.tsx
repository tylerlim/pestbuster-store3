import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Image
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
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
      <Image 
          src="/images/PestBusterStore_Tran.png"
          alt="Pest Buster Store Logo"
          width={150}
          height={40}
          style={{
            objectFit: 'contain',
            width: '20',
            height: '20'
          }}/>
  </Link>
</Heading>

        <Spacer />

        <Flex>
          <Link href="/travel-guide" px={4} color="black">
            Product
          </Link>
          <Link href="/famous-places" px={4} color="black">
            Story
          </Link>
          <Link href="/contact-us" px={4} color="black">
            Contact Us
          </Link>
                   <Link 
            href="https://shopee.com.my/pestbuster.os" 
            target="_blank"
            rel="noopener noreferrer"
            px={4} 
            color="yellow.600"
          >
            Buy Now
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;