import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { SlideFade } from '@chakra-ui/transition';

import Sidebar from '../Sidebar';
import DesktopNav from './DesktopNav';

const ministerioIMG = './ministerio.webp';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolling, setIsScrolling] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolling(window.scrollY);
    });

    return () =>
      window.removeEventListener('scroll', () => {
        setIsScrolling(0);
      });
  }, []);

  return (
    <>
      <SlideFade offsetY="-100px" in={true} delay={1}>
        <Box
          top={0}
          w="100%"
          pos="fixed"
          minH="60px"
          shadow="xl"
          style={{ zIndex: 2 }}
          transitionProperty="background"
          transitionDuration="0.3s"
          bg={{
            base: 'primary',
            xl: isScrolling > 50 ? 'primary' : 'transparent',
          }}
        >
          <Flex
            color="white"
            py={{ base: 4 }}
            px={{ base: 5 }}
            display={{ base: 'flex', xl: 'none' }}
            align="center"
          >
            <IconButton
              icon={<FaBars />}
              onClick={onToggle}
              colorScheme="brand"
            />
            <Flex flex={1} justify="center">
              <IconButton
                borderRadius={0}
                cursor="pointer"
                as={Link}
                to="hero"
                offset={0}
                spy={true}
                smooth={true}
                duration={500}
                variant="link"
                _hover={{ opacity: 0.9 }}
                maxW="200px"
                icon={<Image src={ministerioIMG} />}
              />
            </Flex>
          </Flex>
          <Flex
            py={{ base: 4 }}
            mx="auto"
            minH="80px"
            align="center"
            justify="space-between"
            display={{ base: 'none', xl: 'flex' }}
            maxW={{ base: '90%', xl: '1200px', '1xl': '1500px' }}
          >
            <DesktopNav />
            <Button
              my="auto"
              borderRadius={0}
              cursor="pointer"
              as={Link}
              to="hero"
              offset={0}
              spy={true}
              smooth={true}
              duration={500}
              variant="link"
              color="white"
              _hover={{ opacity: 0.9 }}
            >
              <Image src={ministerioIMG} />
            </Button>
          </Flex>
        </Box>
        <Sidebar isOpen={isOpen} onToggle={onToggle} />
      </SlideFade>
    </>
  );
};

Navbar.propTypes = {
  onToggle: PropTypes.func,
};

export default React.memo(Navbar);
