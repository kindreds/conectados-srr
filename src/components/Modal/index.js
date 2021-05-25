import React from 'react';
import { Text } from '@chakra-ui/layout';
import {
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal as ModalContainer,
} from '@chakra-ui/modal';
import { Flex } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';

import Linkedin from '../Linkedin';
import { speakers } from '../../data';
import { FaBlog } from 'react-icons/fa';
import { Box } from '@chakra-ui/layout';

const Modal = ({ id, onToggle, isOpen, finalRef }) => {
  const speaker = speakers.filter((s) => s.id === id)[0];
  const { avatar, name, description, fullDescription, href } = speaker;

  return (
    <ModalContainer
      isCentered
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onToggle}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent
        pos="relative"
        p={{ xl: 32 }}
        py={8}
        maxW={{ base: '90%', md: '500px', xl: '80%' }}
      >
        <ModalCloseButton />
        <ModalBody>
          <Stack align="center" direction={{ base: 'column', xl: 'row' }}>
            <Box mb={{ base: 2, xl: 0 }} mr={{ base: 0, xl: 10 }}>
              <Avatar
                name={name}
                src={avatar}
                bg="transparent"
                objectFit="cover"
                borderRadius="full"
                w={{ base: '100px', md: '150px', xl: '200px' }}
                h={{ base: '100px', md: '150px', xl: '200px' }}
                minW={{ base: '100px', md: '150px', xl: '200px' }}
                minH={{ base: '100px', md: '150px', xl: '200px' }}
              />
            </Box>
            <Flex flexDirection="column">
              <Flex flexDirection="column">
                <Text
                  color="secundary"
                  fontWeight="bold"
                  fontSize={{ base: 'lg', md: '2xl' }}
                  textAlign={{ base: 'center', xl: 'left' }}
                >
                  {name}
                </Text>
                <Text mb={4} textAlign={{ base: 'center', xl: 'left' }}>
                  {description}
                </Text>
              </Flex>
              <Text fontSize={{ base: 'sm' }} textAlign="justify" mb={4}>
                {fullDescription}
              </Text>
            </Flex>
          </Stack>
          <Flex mt={6} justify="flex-end">
            {href && (
              <IconButton
                p={10}
                as="a"
                href={href}
                pos="absolute"
                variant="unstyled"
                target="_blank"
                rel="noopener noreferrer"
                bottom={{ base: 5, xl: 10 }}
                icon={
                  href.includes('linkedin') ? (
                    <Linkedin fill="#838383" />
                  ) : (
                    <FaBlog />
                  )
                }
              />
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
