import React, { useRef } from 'react';

import { Image } from '@chakra-ui/image';
import { SlideFade } from '@chakra-ui/transition';
import { Box, Flex, Text } from '@chakra-ui/layout';

import useIntersected from '../../hooks/useIntersected';

const recurso7 = './recurso7.svg';
const recurso8 = './recurso8.svg';
const recurso9 = './recurso9.svg';
const recurso10 = './recurso10.svg';

const EventsInfo = () => {
  const node = useRef();
  const { show } = useIntersected({ node, margin: '0px' });

  return (
    <Flex
      ref={node}
      pt={8}
      pb={6}
      pl="5%"
      wrap="wrap"
      spacing={10}
      bg="primary"
      align="center"
      justify={{ base: 'space-evenly', xl: 'space-evenly' }}
    >
      <SlideFade in={show} offsetX="-50px" delay={0.5}>
        <Flex align="center" mb={{ base: 6 }} w={{ base: '72' }}>
          <Image src={recurso7} w={{ base: '28' }} objectFit="contain" />
          <Box ml={5}>
            <Text
              color="#fff"
              fontSize={{ base: 'lg', lg: 'xl' }}
              mb="-2"
              lineHeight="shorter"
            >
              Conferencias <br />
              magistrales
            </Text>
            <Text color="#fff" fontSize={{ base: '4xl', lg: '5xl' }}>
              02
            </Text>
          </Box>
        </Flex>
      </SlideFade>
      <SlideFade in={show} offsetX="-50px" delay={1}>
        <Flex
          mt={-1.5}
          align="center"
          mb={{ base: 6, lg: 4 }}
          w={{ base: '72' }}
        >
          <Image src={recurso8} w={{ base: '28' }} objectFit="contain" />
          <Box ml={5}>
            <Text
              color="#fff"
              fontSize={{ base: 'lg', lg: 'xl' }}
              mb="-2"
              lineHeight="shorter"
            >
              Charlas con <br />
              expertos
            </Text>
            <Text color="#fff" fontSize={{ base: '4xl', lg: '5xl' }}>
              02
            </Text>
          </Box>
        </Flex>
      </SlideFade>
      <SlideFade in={show} offsetX="50px" delay={1}>
        <Flex
          alignItems="flex-start"
          mt={-1.5}
          align="center"
          mb={{ base: 6, lg: 4 }}
          w={{ base: '72' }}
        >
          <Image src={recurso9} w={{ base: '28' }} objectFit="contain" />
          <Box ml={5}>
            <Text
              color="#fff"
              fontSize={{ base: 'lg', lg: 'xl' }}
              mb="-2"
              lineHeight="shorter"
            >
              Talleres
            </Text>
            <Text color="#fff" fontSize={{ base: '4xl', lg: '5xl' }}>
              12
            </Text>
          </Box>
        </Flex>
      </SlideFade>
      <SlideFade in={show} offsetX="50px" delay={1}>
        <Flex
          mt={-1.5}
          align="center"
          mb={{ base: 6, lg: 4 }}
          w={{ base: '72' }}
        >
          <Image src={recurso10} w={{ base: '28' }} objectFit="contain" />
          <Box ml={5}>
            <Text
              color="#fff"
              fontSize={{ base: 'lg', lg: 'xl' }}
              mb="-2"
              lineHeight="shorter"
            >
              Mesas de <br />
              experiencias
            </Text>
            <Text color="#fff" fontSize={{ base: '4xl', lg: '5xl' }}>
              06
            </Text>
          </Box>
        </Flex>
      </SlideFade>
    </Flex>
  );
};

export default React.memo(EventsInfo);
