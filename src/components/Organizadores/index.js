import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/image';
import { SlideFade } from '@chakra-ui/transition';
import { useInView } from 'react-intersection-observer';
import { Container, Heading, Grid } from '@chakra-ui/layout';

const UTEC_LOGO = './utec.png';
const ANUPP_LOGO = './aliado7.png';
const UNIR_LOGO = './logo-unir.png';
const IESALC_LOGO = './aliado4.png';

const Organizadores = () => {
  const [hasView, setHasView] = useState(false);
  const { inView: show, ref: node } = useInView();

  useEffect(() => {
    if (show) return setHasView(true);
  }, [show]);

  return (
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
          <Image
            loading="lazy"
            mx="auto"
            maxW={52}
            src={hasView && UNIR_LOGO}
          />
          <Image
            loading="lazy"
            mx="auto"
            maxW={52}
            src={hasView && UTEC_LOGO}
          />
          <Image
            loading="lazy"
            mx="auto"
            maxW={40}
            src={hasView && IESALC_LOGO}
          />
          <Image
            loading="lazy"
            mx="auto"
            maxW={48}
            src={hasView && ANUPP_LOGO}
          />
        </Grid>
      </SlideFade>
    </Container>
  );
};

export default Organizadores;
