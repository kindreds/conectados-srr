import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Flex, Text, Box } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';

const SpeakerItem = ({ id, name, avatar, description, handleOpenModal }) => {
  const display = useBreakpointValue({
    base: 'none',
    ms: 'none',
    sm: 'none',
    md: 'block',
    lg: 'block',
    xl: 'block',
    '1xl': 'block',
  });

  return (
    <Flex
      align="center"
      pb={{ base: 10 }}
      flexDirection="column"
      minH={display === 'none' ? '200px' : '290px'}
    >
      <Avatar
        mb={2}
        size="2xl"
        name={name}
        src={avatar}
        cursor="pointer"
        w="128px"
        h="128px"
        bg="transparent"
        transition="opacity 0.3s"
        _hover={{ opacity: 0.5 }}
        onClick={() => handleOpenModal(id)}
      />
      <Text
        fontSize="lg"
        color="secundary"
        fontWeight="bold"
        textAlign="center"
        maxW={{ base: '80%' }}
      >
        {name}
      </Text>
      <Text
        display={display}
        textAlign="center"
        maxW={{ base: '80%' }}
        fontSize={{ base: 'smaller', xl: 'sm' }}
      >
        {description}
      </Text>
    </Flex>
  );
};

export default SpeakerItem;
