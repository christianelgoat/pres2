import React from 'react';
import type { TableRowData } from './types';

export const TABLE_DATA: TableRowData[] = [
  {
    component: 'Error Sistemático',
    theory: 'Un error inherente al diseño o planteamiento que afecta consistentemente a todos los resultados.',
    application: '¿La solución está fundamentalmente mal planteada para el problema del usuario?',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    quantitative: React.createElement(
      React.Fragment,
      null,
      'El ',
      React.createElement('span', { className: 'font-bold' }, 'Sesgo'),
      ' conceptual es bajo. El MVP logró una mejora promedio de ',
      React.createElement('span', { className: 'font-bold text-green-600' }, '+0.97'),
      ' en la reducción de estrés, superando el criterio de éxito.'
    ),
    qualitative: '"Al ver los datos más ordenados que en excel.", "Cuando no tuve que hacer cuentas a mano."',
  },
  {
    component: 'VERACIDAD',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    theory: React.createElement(
      React.Fragment,
      null,
      React.createElement('span', { className: 'font-bold text-slate-900' }, 'Alta.'),
      ' El concepto de la solución es correcto y apunta a un dolor real del usuario.'
    ),
    application: '',
    quantitative: '',
    qualitative: '',
  },
  {
    component: 'Error Aleatorio',
    theory: 'Errores no predecibles que causan variabilidad e inconsistencia en los resultados.',
    application: '¿El prototipo funciona de manera fiable y consistente en cada uso y para cada usuario?',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    quantitative: React.createElement(
      React.Fragment,
      null,
      'Las ',
      React.createElement('span', { className: 'font-bold' }, 'Medidas de Dispersión'),
      ' son altas. La reducción de tiempo promedio fue del ',
      React.createElement('span', { className: 'font-bold' }, '0%'),
      ', con respuestas que variaron desde ',
      React.createElement('span', { className: 'text-green-600' }, '+67%'),
      ' hasta ',
      React.createElement('span', { className: 'text-red-600' }, '-100%'),
      '.'
    ),
    qualitative: '"al meter datos y no se guardaron bien", "cuando se demoraba en cargar la web", "se trabó al guardar cambios".',
  },
  {
    component: 'PRECISIÓN',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    theory: React.createElement(
      React.Fragment,
      null,
      React.createElement('span', { className: 'font-bold text-slate-900' }, 'Baja.'),
      ' La ejecución técnica del MVP es inestable. Los errores aleatorios (bugs) impiden la repetibilidad y reproducibilidad de resultados exitosos.'
    ),
    application: '',
    quantitative: '',
    qualitative: '',
  },
  {
    component: 'Error Total',
    theory: 'La combinación de los errores sistemáticos y aleatorios.',
    application: 'La suma del bajo error conceptual y el alto error técnico.',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    quantitative: React.createElement(
      React.Fragment,
      null,
      'La ',
      React.createElement('span', { className: 'font-bold' }, 'Incertidumbre'),
      ' en el resultado final es alta. La tasa de aceptación fue del ',
      React.createElement('span', { className: 'font-bold' }, '53%'),
      ', reflejando la desconfianza generada por la imprecisión.'
    ),
    qualitative: '"medio confuso la neta", "no sé si era error mío o del sistema".',
  },
  {
    component: 'EXACTITUD',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    theory: React.createElement(
        React.Fragment,
        null,
        React.createElement('span', { className: 'font-bold text-slate-900' }, 'Baja.'),
        ' A pesar de ser una idea veraz, la falta de precisión técnica hace que la solución global no sea sea...'
    ),
    application: '',
    quantitative: '',
    qualitative: '',
  },
];
