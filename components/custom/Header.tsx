import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Image,
  Menu, Button
} from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"

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
        <MenuRoot>
        <MenuTrigger asChild px={4} color="black">
          <Button variant="outline" size="sm">
            Product
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="category1">
            <Link href="/lizardProduct">Lizard</Link>
          </MenuItem>
          <MenuItem value="category2">
            <Link href="/products/category2">Category 2</Link>
          </MenuItem>
          <MenuItem value="category3">
            <Link href="/products/category3">Category 3</Link>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
  <Link href="/story" px={4} color="black">
    Story
  </Link>
  <Link href="/contact" px={4} color="black">
    Contact Us
  </Link>
  <Link
    href="https://shopee.com.my/pestbuster.os"
    target="_blank"
    rel="noopener noreferrer"
    px={4}
    color="yellow.600"
  >
    Shop Now
  </Link>
          {/* <Link href="/products" px={4} color="black">
            Product
          </Link>
          <Link href="/story" px={4} color="black">
            Story
          </Link>
          <Link href="/contact" px={4} color="black">
            Contact Us
          </Link>
                   <Link 
            href="https://shopee.com.my/pestbuster.os" 
            target="_blank"
            rel="noopener noreferrer"
            px={4} 
            color="yellow.600" 
          >
            Shop Now
          </Link> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;