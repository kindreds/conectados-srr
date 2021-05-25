import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';

const recurso4 = './recurso4.svg';
const recurso5 = './recurso5.svg';
const recurso6 = './recurso6.svg';

const InfoSection = () => {
  return (
    <Stack
      py={{ base: 12, xl: 20 }}
      spacing={6}
      align="center"
      justify="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex align="center">
        <Image
          src={recurso5}
          w={{ base: 85, xl: '100px' }}
          objectFit="contain"
        />
        <Box ml={5}>
          <Text color="primary" fontSize="xl">
            Competencia <br />
            pedagógica
          </Text>
        </Box>
      </Flex>
      <Flex align="center">
        <Image
          src={recurso6}
          w={{ base: 85, xl: '100px' }}
          objectFit="contain"
        />
        <Box ml={5}>
          <Text color="primary" fontSize="xl">
            Competencia <br />
            tecnológica
          </Text>
        </Box>
      </Flex>
      <Flex align="center">
        <Image
          src={recurso4}
          w={{ base: 85, xl: '100px' }}
          objectFit="contain"
        />
        <Box ml={5}>
          <Text color="primary" fontSize="xl">
            Competencia <br />
            emocional
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default InfoSection;
