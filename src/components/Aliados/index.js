import { Image } from '@chakra-ui/image';
import { Grid } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/layout';
import { SlideFade } from '@chakra-ui/transition';
import React, { useRef } from 'react';
import useIntersected from '../../hooks/useIntersected';

const aliado1 = './aliado1.png';
const aliado2 = './aliado2.png';
const aliado3 = './aliado3.png';
const aliado5 = './aliado5.png';
const aliado6 = './aliado6.png';
const aliado8 = './aliado8.png';

const Aliados = () => {
  const node = useRef();
  const { show } = useIntersected({ node, margin: '0px' });

  return (
    <Container
      id="aliadas"
      py={{ base: 10, xl: 20 }}
      maxW={{ base: '90%', xl: '1200px', '1xl': '1500px' }}
    >
      <SlideFade in={show} offsetY="100px">
        <Heading
          mb={12}
          color="letterGray"
          textAlign="center"
          fontSize={{ base: '2xl', xl: '4xl' }}
        >
          INSTITUCIONES ALIADAS
        </Heading>
        <Grid
          ref={node}
          gap={{ base: 6, xl: 8 }}
          alignItems="center"
          justifyContent={{ base: 'center', sm: 'space-evenly' }}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(2, 200px)',
            xl: 'repeat(3, 220px)',
          }}
        >
          <Image loading="lazy" mb={6} mx="auto" maxW="100%" src={aliado1} />
          <Image loading="lazy" mb={6} mx="auto" maxW="90%" src={aliado2} />
          <Image loading="lazy" mb={6} mx="auto" maxW="100%" src={aliado3} />
          <Image loading="lazy" mb={6} mx="auto" maxW="100%" src={aliado5} />
          <Image loading="lazy" mb={6} mx="auto" maxW="100%" src={aliado6} />
          <Image loading="lazy" mb={6} mx="auto" maxW="100%" src={aliado8} />
        </Grid>
      </SlideFade>
    </Container>
  );
};

export default React.memo(Aliados);
