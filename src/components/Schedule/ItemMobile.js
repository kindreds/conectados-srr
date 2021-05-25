import React from 'react';
import Slider from 'react-slick';
import { Avatar } from '@chakra-ui/avatar';
import { Text, Flex, Box } from '@chakra-ui/layout';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Stack } from '@chakra-ui/layout';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { UnorderedList } from '@chakra-ui/layout';
import { ListItem } from '@chakra-ui/layout';

const settings = {
  speed: 500,
  arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ItemMobile = ({ color, avatars, description, hour, header, temas }) => {
  return (
    <>
      <Flex mb={2} align="center">
        {!avatars ? null : avatars.length === 1 ? (
          <Avatar loading="lazy" src={avatars[0]} size="xl" />
        ) : (
          <Box w="100px" h="100%" maxW="100px" maxH="100px">
            <Slider {...settings}>
              {avatars.map((avatar, i) => (
                <Box key={i} borderRadius="50%">
                  <Avatar loading="lazy" src={avatar} size="xl" />
                </Box>
              ))}
            </Slider>
          </Box>
        )}
        <Box ml={4}>
          <Text color="letterGray" fontWeight="bold" fontSize="lg">
            {hour}
          </Text>
          <Text color={color} fontWeight="bold">
            {header}
          </Text>
          {description && (
            <Text
              mt={2}
              textAlign="justify"
              fontSize={{ base: 'sm', '1xl': 'lg' }}
            >
              {description}
            </Text>
          )}
        </Box>
      </Flex>
      {temas.map(({ sala, content, paragraph, speakers, list }, i) => (
        <AccordionItem key={i} borderColor="transparent">
          <Box>
            <AccordionButton px={3}>
              <Text
                flex="1"
                textAlign="left"
                color={color}
                fontSize={{ base: 'sm', sm: 'md' }}
              >
                {sala && <strong>{`${sala}: `}</strong>}
                {content}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              px={2}
              pb={4}
              color="#3c3c3b"
              textAlign="justify"
              fontSize={{ base: 'sm', sm: 'md' }}
            >
              {paragraph}
              {speakers && (
                <Stack
                  mt={4}
                  spacing={0}
                  wrap="wrap"
                  direction={{ base: 'column', sm: 'row' }}
                  align="flex-start"
                  justify="flex-start"
                >
                  {speakers.map(({ avatar, name, desc }, i) => (
                    <Flex maxW="400px" key={i} align="center">
                      <Avatar mb={4} size="xl" src={avatar} />
                      <Box mb={4} mx={4}>
                        <Text color="#3c3c3b" fontWeight="bold">
                          {name}
                        </Text>
                        <Text
                          color="#3c3c3b"
                          textAlign="left"
                          fontSize={{ base: 'small', md: 'sm' }}
                        >
                          {desc}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Stack>
              )}
              {list && (
                <Box mt={4} justify={'flex-start'}>
                  {list.map((text, i) => (
                    <UnorderedList key={i} mb={2} mx={4}>
                      <ListItem>
                        <Text>{text}</Text>
                      </ListItem>
                    </UnorderedList>
                  ))}
                </Box>
              )}
            </AccordionPanel>
          </Box>
        </AccordionItem>
      ))}
    </>
  );
};

export default ItemMobile;
