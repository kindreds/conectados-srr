import React from 'react';
import dynamic from 'next/dynamic';
import { Heading, Box, Divider } from '@chakra-ui/layout';

import Hero from '../components/Hero';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Countdown from '../components/Countdown';
import EventsInfo from '../components/EventsInfo';
import InfoSection from '../components/Section/InfoSection';

import { congreso, metodologia } from '../components/Section/data';
import Organizadores from '../components/Organizadores';

const FOOTER_IMG = './footer.jpg';

const Speakers = dynamic(() => import('../components/Speakers'), {
  ssr: false,
});
const Schedule = dynamic(() => import('../components/Schedule'), {
  ssr: false,
});
const Section = dynamic(() => import('../components/Section'), { ssr: false });
const Aliados = dynamic(() => import('../components/Aliados'), { ssr: false });

const Index = () => {
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
        <Organizadores />
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
      `}</style>
    </>
  );
};

export default Index;
