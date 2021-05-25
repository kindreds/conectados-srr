import React, { useRef } from 'react';
import { Button } from '@chakra-ui/button';
import { Container, Heading, Text, Box } from '@chakra-ui/layout';

import { ScaleFade } from '@chakra-ui/transition';
import useIntersected from '../../hooks/useIntersected';

const Section = ({
  id,
  file,
  color,
  theme,
  button,
  content,
  headline,
  fileName,
  children,
}) => {
  const node = useRef();
  const { show } = useIntersected({ node, margin: '0px' });

  return (
    <Box bg={color === 'primary' ? 'bgGray' : 'bgWhite'}>
      <ScaleFade initialScale={0.9} in={show}>
        <Container id={id} py={20} maxW={{ base: '90%', xl: '1100px' }}>
          <Heading
            mb={12}
            color={color}
            textAlign="center"
            fontSize={{ base: '2xl', xl: '4xl' }}
          >
            {headline}
          </Heading>
          <Text
            ref={node}
            color="letterGray"
            textAlign="justify"
            mb={{ base: children ? 0 : 12, xl: children ? 0 : 24 }}
            fontSize={{ md: 'lg' }}
          >
            {content}
          </Text>
          {children}
          <Button
            maxW="sm"
            as={file ? 'a' : 'button'}
            mx="auto"
            href={file}
            download={fileName}
            p={8}
            display="flex"
            colorScheme={theme}
            flexDirection="column"
          >
            <Text mb={1}>{button.title}</Text>
            <Text fontWeight="100">{button.description}</Text>
          </Button>
        </Container>
      </ScaleFade>
    </Box>
  );
};

export default React.memo(Section);
