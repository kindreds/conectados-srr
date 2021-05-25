import React, { useRef } from 'react';
import { Tab, Tabs, TabPanel, TabPanels, TabList } from '@chakra-ui/tabs';
import {
  Text,
  Flex,
  Stack,
  Heading,
  Divider,
  Container,
  StackDivider,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Fade } from '@chakra-ui/transition';
import { Accordion } from '@chakra-ui/accordion';

import {
  MESAS_EXP,
  MESAS_EXP2,
  INAGURACION,
  COMP_EMOCIONAL,
  CONF_MAGISTRAL,
  CHARLA_EXPERTOS,
  COMP_PEDAGOGICA,
  COMP_EMOCIONAL2,
  CHARLA_EXPERTOS2,
  COMP_PEDAGOGICA2,
  COMP_TECNOLOGICA,
  COMP_TECNOLOGICA2,
  CONF_MAGISTRAL2,
  CLAUSURA,
  TRANS_DIGITAL,
} from '../../data';
import Item from './Item';
import PanelItem from './PanelItem';
import useIntersected from '../../hooks/useIntersected';

const tazaICON = './taza.svg';
const tazaBlueICON = './taza-blue.svg';
const ProgramaConectados = './Programa-ConectadosV2.pdf';

const Schedule = () => {
  const node = useRef();
  const { show } = useIntersected({ node, margin: '0px' });

  return (
    <Fade in={show} delay={0.3}>
      <Container
        id="programa"
        py={{ base: 10, xl: 20 }}
        maxW={{ base: '100%', sm: '90%', xl: '1200px', '1xl': '1500px' }}
      >
        <Heading
          mb={10}
          color="letterGray"
          textAlign="center"
          fontSize={{ base: '2xl', xl: '4xl' }}
        >
          PROGRAMA
        </Heading>
        <Tabs ref={node} isFitted variant="unstyled" colorScheme="brand2">
          <TabList mb="1em">
            <Tab
              p={{ xl: 2 }}
              bg="bgGray"
              color="primary"
              fontSize={{ xl: 'xl' }}
              _selected={{ color: 'white', bg: 'primary' }}
            >
              Dia 1 - 27/05
            </Tab>
            <Tab
              bg="bgGray"
              color="secundary"
              fontSize={{ xl: 'xl' }}
              _selected={{ color: 'white', bg: 'secundary' }}
            >
              Dia 2 - 28/05
            </Tab>
          </TabList>
          <TabPanels>
            {/* TAB DAY ONE */}
            <TabPanel>
              <Accordion allowToggle>
                <Stack
                  spacing={4}
                  divider={
                    <Divider
                      orientation="horizontal"
                      w="100%"
                      borderColor="#e2e2e2"
                    />
                  }
                >
                  <Item {...INAGURACION} />
                  <PanelItem {...CONF_MAGISTRAL} />
                  <PanelItem {...CHARLA_EXPERTOS} />
                  <PanelItem {...COMP_PEDAGOGICA} />
                  <PanelItem {...TRANS_DIGITAL} />
                </Stack>

                <Flex bg="bgGray" py={2} px={4} justify="space-between" my={6}>
                  <Flex
                    display={{ base: 'none', md: 'block' }}
                    justify="center"
                    w="100px"
                    mr={2}
                  >
                    <Image w="30px" src={tazaBlueICON} />
                  </Flex>
                  <Text
                    fontSize="lg"
                    textAlign="center"
                    fontWeight="bold"
                    color="primary"
                  >
                    13:30 - 14:30
                  </Text>
                  <Text
                    flex={1}
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign="center"
                    color="primary"
                  >
                    INTERMEDIO
                  </Text>
                </Flex>
                <Stack spacing={4} divider={<Divider />}>
                  <PanelItem {...COMP_TECNOLOGICA} />
                  <PanelItem {...MESAS_EXP} />
                  <PanelItem {...COMP_EMOCIONAL} />

                  <StackDivider />
                </Stack>
              </Accordion>
            </TabPanel>
            {/* TAB DAY TWO */}
            <TabPanel>
              <Accordion allowToggle>
                <Stack spacing={4} divider={<Divider />}>
                  <PanelItem {...CHARLA_EXPERTOS2} />
                  <PanelItem {...COMP_PEDAGOGICA2} />
                  <PanelItem {...COMP_TECNOLOGICA2} />
                </Stack>
                <Flex bg="bgGray" py={2} px={4} justify="space-between" my={6}>
                  <Flex justify="center" w="100px" mr={2}>
                    <Image w="30px" src={tazaICON} />
                  </Flex>
                  <Text
                    fontSize="lg"
                    textAlign="center"
                    fontWeight="bold"
                    color="secundary"
                  >
                    12:30 - 14:30
                  </Text>
                  <Text
                    flex={1}
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign="center"
                    color="secundary"
                  >
                    INTERMEDIO
                  </Text>
                </Flex>
                <Stack spacing={4} divider={<Divider />}>
                  <PanelItem {...COMP_EMOCIONAL2} />
                  <PanelItem {...MESAS_EXP2} />
                  <PanelItem {...CONF_MAGISTRAL2} />
                  <Item {...CLAUSURA} />
                  <StackDivider />
                </Stack>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Button
          p={8}
          mt={4}
          as={'a'}
          maxW="sm"
          mx="auto"
          href={ProgramaConectados}
          download={'Programa-Conectados'}
          display="flex" // Flex
          colorScheme="gray2"
          flexDirection="column"
        >
          <Text mb={1}>DESCARGAR</Text>
          <Text fontWeight="100">EL PROGRAMA COMPLETO</Text>
        </Button>
      </Container>
    </Fade>
  );
};

export default Schedule;
