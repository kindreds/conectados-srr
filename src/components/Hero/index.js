import React from 'react';
import { Box } from '@chakra-ui/layout';

import HeroContent from './HeroContent';
// import { Container } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { SlideFade } from '@chakra-ui/transition';

const dotIMG = 'https://conectados-srr.vercel.app/dot.webp';
const heroIMG =
  'https://api.kirasportswear.com/storage/app/imagenesGenerales/2021-03/shenaz_portada-3.webp';
const dotsIMG = 'https://conectados-srr.vercel.app/dots.webp';
const cruzIMG = 'https://conectados-srr.vercel.app/cruz.webp';

const Hero = () => {
  return (
    <Box
      id="hero"
      overflow="hidden"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgImage={`url(${heroIMG})`}
      minH={{ xl: '101vh' }}
    >
      <Box
        minH={{ xl: '100vh' }}
        pt={{ base: 40, xl: 0 }}
        pb={{ base: 20, xl: 0 }}
      >
        <Flex
          pos="relative"
          mx="auto"
          minH={{ xl: '72vh' }}
          align={{ base: 'center', xl: 'flex-end' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          maxW={{ base: '90%', xl: '1200px', '1xl': '1500px' }}
          justify={{ base: 'center', lg: 'space-around', xl: 'space-between' }}
        >
          <Image
            pos="absolute"
            opacity={{ base: 0, xl: 1 }}
            top="25%"
            left="2%"
            src={dotsIMG}
          />
          <Image
            pos="absolute"
            opacity={{ base: 0, xl: 1 }}
            bottom="-20%"
            right="-5%"
            src={dotsIMG}
          />
          <Image
            pos="absolute"
            opacity={{ base: 0, xl: 1 }}
            top="20%"
            left="25%"
            src={cruzIMG}
          />
          <Image
            pos="absolute"
            opacity={{ base: 0, xl: 1 }}
            bottom="-10%"
            right="20%"
            src={cruzIMG}
          />
          <Image
            pos="absolute"
            opacity={{ base: 0, xl: 1 }}
            bottom="-15%"
            right="17%"
            src={dotIMG}
          />
          <Image
            pos="absolute"
            opacity={{ base: 0, xl: 1 }}
            bottom="15%"
            right="0"
            src={cruzIMG}
          />
          <Image
            pos="absolute"
            opacity={{ base: 0, xl: 1 }}
            bottom="35%"
            right="10%"
            src={dotIMG}
          />
          <SlideFade offsetX="-100px" in={true} delay={1}>
            <Flex className="hero__slogan" mb={{ base: 10, lg: 0 }}>
              <HeroContent width="100%" />
            </Flex>
          </SlideFade>
          <SlideFade offsetX="100px" in={true} delay={1}>
            <Button
              as="a"
              href={
                'https://forms.office.com/Pages/ResponsePage.aspx?id=qN2bF2TZ_0OtO2dBhqL6KBUUV_NUIBtHqTCLvqHyWZtUNDJRRDdMTkZFMVNGMVdZVkZNRERLVjNWTi4u'
              }
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              color="secundary"
            >
              REGÍSTRATE AQUÍ
            </Button>
          </SlideFade>
        </Flex>
      </Box>
    </Box>
  );
};

export default React.memo(Hero);
