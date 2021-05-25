import React from 'react';
import { Image } from '@chakra-ui/image';
import { ScaleFade, SlideFade } from '@chakra-ui/transition';
import { Box, Flex, Heading, Text, Stack } from '@chakra-ui/layout';

import { useInView } from 'react-intersection-observer';

const recurso1 = './recurso1.svg';
const recurso2 = './recurso2.svg';
const recurso3 = './recurso3.svg';

const Info = () => {
  const { inView: show, ref: node } = useInView();

  return (
    <Stack
      pos="relative"
      ref={node}
      py={10}
      spacing={10}
      bg="secundary"
      align="center"
      justify="center"
      px={{ base: '5%' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <SlideFade offsetX="20px" in={show} delay={0.5}>
        <Flex align="center" minW={72}>
          <Image src={recurso1} w={{ base: 85 }} objectFit="contain" />
          <Box ml={5}>
            <Heading color="#fff" mb="-2">
              27 y 28
            </Heading>
            <Text color="#fff" fontSize="3xl">
              de mayo
            </Text>
          </Box>
        </Flex>
      </SlideFade>
      <ScaleFade initialScale={0.9} in={show} delay={1}>
        <Flex align="center" minW={72}>
          <Image src={recurso2} w={{ base: 85 }} objectFit="contain" />
          <Box ml={5}>
            <Heading color="#fff" mb="-2">
              Docentes
            </Heading>
            <Text color="#fff" fontSize="2xl">
              Universitarios
            </Text>
          </Box>
        </Flex>
      </ScaleFade>
      <SlideFade offsetX="-20px" in={show} delay={0.5}>
        <Flex align="center" minW={72}>
          <Image src={recurso3} w={{ base: 85 }} objectFit="contain" />
          <Box ml={5}>
            <Flex align="center">
              <Heading color="#fff">9:00</Heading>
              <Text color="#fff" fontSize="2xl" ml={2}>
                a.m.
              </Text>
            </Flex>
            <Flex align="center">
              <Heading color="#fff">6:00</Heading>
              <Text color="#fff" fontSize="2xl" ml={2}>
                p.m.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </SlideFade>
    </Stack>
  );
};

export default React.memo(Info);
