const file1 = './Metodologia-Conectados v3.pdf';
const file2 = './Guia_Participantes.pdf';

export const congreso = {
  id: 'congreso',
  theme: 'brand',
  color: 'secundary',
  headline: '¿QUÉ ES EL CONGRESO CONECTADOS?',
  content:
    'Es un espacio innovador, de interacción y aprendizaje, que nace con la intención de contribuir al diálogo educativo y promover aprendizajes desde las experiencias virtuales y las nuevas formas de enseñanza en línea contribuyendo así a la continuidad de la prestación del servicio de educación universitaria.',
  button: {
    title: 'DESCARGAR',
    description: 'GUÍA DEL PARTICIPANTE',
  },
  file: file2,
  fileName: 'Guia de Participantes',
};

export const metodologia = {
  id: 'metodologia',
  theme: 'brand2',
  color: 'primary',
  headline: 'METODOLOGÍA',
  content:
    'Para fortalecer las competencias de los docentes universitarios trabajaremos tres líneas temáticas con la colaboración de profesionales de instituciones educativas del nivel superior reconocidas a nivel nacional e internacional.',
  button: {
    title: 'DESCARGAR',
    description: 'PDF METODOLOGÍA',
  },
  file: file1,
  fileName: 'Metodologia_Conectados',
};
