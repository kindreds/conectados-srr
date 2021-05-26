import React from 'react';
import Slider from 'react-slick';
import { Avatar } from '@chakra-ui/avatar';
import { Text, Flex, Box, Grid } from '@chakra-ui/layout';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { ListItem } from '@chakra-ui/layout';
import { UnorderedList } from '@chakra-ui/layout';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ItemDesktop = ({
  color,
  avatars,
  description,
  hour,
  header,
  temas,
  show,
}) => {
  return (
    <AccordionItem w="100%" borderColor="transparent">
      <Box w="100%" display={'flex'}>
        {!avatars ? null : avatars.length === 1 ? (
          <Avatar
            loading="lazy"
            mr={2}
            mb={6}
            src={show && avatars[0]}
            size="xl"
          />
        ) : (
          <Box mr={2} mb={4} w="100px" h="100%" maxW="100px" maxH="100px">
            {show && (
              <Slider {...settings}>
                {avatars.map((avatar, i) => (
                  <Box key={i} borderRadius="50%">
                    <Avatar loading="lazy" src={avatar} size="xl" />
                  </Box>
                ))}
              </Slider>
            )}
          </Box>
        )}
        <Box w="100%">
          <Box ml={4}>
            <Text
              color="letterGray"
              fontWeight="bold"
              fontSize={{ base: 'lg', '1xl': 'xl' }}
            >
              {hour}
            </Text>
            <Text fontSize={{ '1xl': 'lg' }} color={color} fontWeight="bold">
              {header}
            </Text>
            {description && (
              <Text fontSize={{ '1xl': 'lg' }}>{description}</Text>
            )}
          </Box>
          <AccordionButton mt={1}>
            <Grid
              gap={10}
              flex="1"
              templateColumns={`repeat(${temas.length}, 1fr)`}
            >
              {temas.map(({ sala, content }, i) => (
                <Text
                  key={i}
                  flex={1}
                  textAlign="left"
                  color={color}
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  {sala && <strong>{`${sala}: `}</strong>}
                  {content}
                </Text>
              ))}
            </Grid>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            pr={0}
            pb={4}
            color="#3c3c3b"
            textAlign="justify"
            fontSize={{ base: 'sm', sm: 'md' }}
          >
            <Grid
              mr={{ base: 8, '1xl': 20 }}
              mb={{ base: 4, '1xl': 8 }}
              gap={{ base: 10, '1xl': 14 }}
              flex="1"
              templateColumns={`repeat(${temas.length}, 1fr)`}
            >
              {temas.map(({ paragraph }, i) => (
                <Text fontSize={{ base: 'sm' }} key={i}>
                  {paragraph}
                </Text>
              ))}
            </Grid>
            <Grid
              gap={6}
              flex="1"
              templateColumns={`repeat(${temas.length}, 1fr)`}
            >
              {temas.map(({ speakers, list }, i) => (
                <div key={i}>
                  {speakers && (
                    <Flex
                      wrap="wrap"
                      justifyContent={
                        speakers.length >= 3 ? 'space-evenly' : 'flex-start'
                      }
                    >
                      {speakers.map(({ avatar, name, desc }, i) => (
                        <Flex
                          alignItems="flex-start"
                          mb={4}
                          key={i}
                          maxW={{
                            base:
                              speakers.length >= 3
                                ? '330px'
                                : temas.length === 1
                                ? '450px'
                                : '90%',
                            '1xl':
                              speakers.length >= 3
                                ? '350px'
                                : temas.length === 1
                                ? '450px'
                                : '90%',
                          }}
                          align="center"
                          justify="center"
                        >
                          <Avatar size="xl" src={avatar} />
                          <Box mb={4} mx={4}>
                            <Text
                              fontWeight="bold"
                              textAlign="left"
                              color="#3c3c3b"
                            >
                              {name}
                            </Text>
                            <Text
                              fontSize="sm"
                              color="#3c3c3b"
                              textAlign="left"
                            >
                              {desc}
                            </Text>
                          </Box>
                        </Flex>
                      ))}
                    </Flex>
                  )}
                  {list && (
                    <Box ml={-1} mt={4} justify={'flex-start'}>
                      {list.map((text, i) => (
                        <UnorderedList key={i} mb={4} mx={4}>
                          <ListItem>
                            <Text fontSize="sm">{text}</Text>
                          </ListItem>
                        </UnorderedList>
                      ))}
                    </Box>
                  )}
                </div>
              ))}
            </Grid>
          </AccordionPanel>
        </Box>
      </Box>
    </AccordionItem>
  );
};

export default ItemDesktop;
