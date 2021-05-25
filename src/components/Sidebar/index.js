import React from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { Slide } from '@chakra-ui/transition';
import { IconButton } from '@chakra-ui/button';
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import Logo from '../Logo';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 3 }}>
      <Box
        pos="absolute"
        top={0}
        left={0}
        bg="primary"
        width="85vw"
        maxW="320px"
        height="100vh"
        p={10}
        flexDirection="column"
        display={{ base: 'flex', xl: 'none' }}
      >
        <Box pos="relative">
          <IconButton
            top={0}
            right={0}
            pos="absolute"
            onClick={onToggle}
            icon={<FaTimes />}
            colorScheme="brand"
          />
        </Box>
        <Heading color="#fff">Menú</Heading>
        <Stack mt="10" spacing="4" divider={<Divider />}>
          <Link
            offset={-70}
            to="congreso"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onToggle}
          >
            <Text color="#fff">Congreso</Text>
          </Link>
          <Link
            offset={-60}
            to="metodologia"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onToggle}
          >
            <Text color="#fff">Metodología</Text>
          </Link>
          <Link
            to="programa"
            offset={-60}
            spy={true}
            smooth={true}
            duration={500}
            onClick={onToggle}
          >
            <Text color="#fff">Programa</Text>
          </Link>
          <Link
            offset={-60}
            to="invitados"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onToggle}
          >
            <Text color="#fff">Invitados</Text>
          </Link>
          <Link
            offset={-78}
            to="aliadas"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onToggle}
          >
            <Text color="#fff">Instituciones aliadas</Text>
          </Link>
        </Stack>
        <Flex flex={0.7} align="flex-end">
          <Logo fill="#fff" height={60} />
        </Flex>
      </Box>
    </Slide>
  );
};

export default Sidebar;
