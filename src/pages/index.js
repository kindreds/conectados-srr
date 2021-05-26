import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Divider } from '@chakra-ui/layout';

import Hero from '../components/Hero';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Countdown from '../components/Countdown';
import EventsInfo from '../components/EventsInfo';
import InfoSection from '../components/Section/InfoSection';

import { congreso, metodologia } from '../components/Section/data';

const options = {
  ssr: false,
};

const Speakers = dynamic(() => import('../components/Speakers'), options);
const Schedule = dynamic(() => import('../components/Schedule'), options);
const Section = dynamic(() => import('../components/Section'), options);
const Aliados = dynamic(() => import('../components/Aliados'), options);
const Organizadores = dynamic(
  () => import('../components/Organizadores'),
  options
);
const Footer = dynamic(() => import('../components/Footer'), options);

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
        <Footer />
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
