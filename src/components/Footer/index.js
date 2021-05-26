import React from 'react';
import { Fade } from '@chakra-ui/transition';
import { Box, Heading } from '@chakra-ui/layout';
import { useInView } from 'react-intersection-observer';

const FOOTER_IMG = './footer.jpg';

const Footer = () => {
  const { ref, inView } = useInView();

  return (
    <Fade in={inView}>
      <Box
        p={10}
        ref={ref}
        minH="200px"
        pos="relative"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgImage={inView && `url(${FOOTER_IMG})`}
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
    </Fade>
  );
};

export default Footer;
