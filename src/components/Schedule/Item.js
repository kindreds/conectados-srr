import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Text, Box } from '@chakra-ui/layout';

const Item = ({ avatars, hour, header, description, nameMinister }) => {
  return (
    <Box display="flex">
      {avatars && <Avatar mr={2} mb={2} src={avatars[0]} size="xl" />}
      <Box w="100%">
        <Box ml={4}>
          <Text
            color="letterGray"
            fontWeight="bold"
            fontSize={{ base: 'lg', '1xl': 'xl' }}
          >
            {hour}
          </Text>
          <Text fontSize={{ '1xl': 'lg' }} color="primary" fontWeight="bold">
            {header}
          </Text>
          <Text fontSize={{ '1xl': 'lg' }} fontWeight="bold">
            {nameMinister}
          </Text>
          <Text fontSize={{ '1xl': 'lg' }}>{description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
