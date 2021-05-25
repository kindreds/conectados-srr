import React, { useRef } from 'react';
import { Image } from '@chakra-ui/image';
import { Container, Heading, Box, Divider, Grid } from '@chakra-ui/layout';

import Hero from '../components/Hero';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';
import Countdown from '../components/Countdown';
import EventsInfo from '../components/EventsInfo';
import InfoSection from '../components/Section/InfoSection';

import Aliados from '../components/Aliados';
import { SlideFade } from '@chakra-ui/transition';
import useIntersected from '../hooks/useIntersected';
import { congreso, metodologia } from '../components/Section/data';

const UTEC_LOGO = './utec.webp';
const FOOTER_IMG = './footer.webp';
const ANUPP_LOGO = './aliado7.webp';
const UNIR_LOGO = './logo-unir.webp';
const IESALC_LOGO = './aliado4.webp';

const Index = () => {
  const node = useRef();
  const { show } = useIntersected({ node, margin: '0px' });

  return (
    <>
      <Box>
        <Navbar />
        <Hero />
        <Countdown />
        <Section {...congreso} />
        <Info />
        <Section {...metodologia}>
          <InfoSection />
        </Section>
        <EventsInfo />
        <Schedule />
        <Speakers />
        {/* Coorganizadores */}
        <Container py={{ base: 10, xl: 20 }}>
          <SlideFade in={show} offsetY="100px">
            <Heading
              mb={8}
              color="letterGray"
              textAlign="center"
              fontSize={{ base: '2xl', xl: '4xl' }}
            >
              COORGANIZADORES
            </Heading>
            <Grid
              ref={node}
              gap={{ base: 6, xl: 8 }}
              alignItems="center"
              justifyContent={{ base: 'center', sm: 'space-evenly' }}
              templateColumns={{
                base: 'repeat(1, 200px)',
                sm: 'repeat(2, 200px)',
                md: 'repeat(4, 200px)',
                xl: 'repeat(4, 200px)',
              }}
            >
              <Image mx="auto" maxW={52} src={UNIR_LOGO} />
              <Image mx="auto" maxW={52} src={UTEC_LOGO} />
              <Image mx="auto" maxW={40} src={IESALC_LOGO} />
              <Image mx="auto" maxW={48} src={ANUPP_LOGO} />
            </Grid>
          </SlideFade>
        </Container>
        <Divider mx="auto" w={{ base: '90%', xl: '80%' }} />
        <Aliados />
        <Box
          p={10}
          minH="200px"
          pos="relative"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgImage={`url(${FOOTER_IMG})`}
        >
          <Box
            top="0"
            left="0"
            right="0"
            h="100%"
            pos="absolute"
            display="flex"
            px={{ base: 4 }}
            alignItems="center"
            justifyContent="center"
            bg="rgba(0,0,0,0.5)"
          >
            <Heading
              textAlign="center"
              fontSize={{ base: 'lg', sm: 'xl', xl: '2xl' }}
              color="white"
            >
              “EL PRESENTE Y EL FUTURO DE LA EDUCACIÓN VIRTUAL UNIVERSITARIA”
            </Heading>
          </Box>
        </Box>
      </Box>
      <style jsx>{`
        @font-face {
          font-family: Mont;
          src: url(./fonts/Montserrat-Bold.ttf);
          font-display: swap;
        }
        @font-face {
          font-family: Gothan;
          src: url(./fonts/Gothan-Book.ttf);
          font-display: swap;
        }
        @font-face {
          font-family: GothanMedium;
          src: url(./fonts/Gotham-Medium.ttf);
          font-display: swap;
        }
        @font-face {
          font-family: GothanBold;
          src: url(./fonts/Gotham-Bold.ttf);
          font-display: swap;
        }
        @font-face {
          font-family: GothanBlack;
          src: url(./fonts/Gotham-Black.ttf);
          font-display: swap;
        }

        .avatar {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default Index;
