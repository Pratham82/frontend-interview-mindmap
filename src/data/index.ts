// import { styleText } from 'util'

// const oldTopics = [
//   {
//     id: '1',
//     label: 'Fundamentals',
//     children: [
//       {
//         id: '2',
//         label: 'Conceptual positions',
//       },
//       {
//         id: '3',
//         label: 'Higher order functions',
//       },
//       {
//         id: '4',
//         label: 'Physiological mechanisms',
//       },
//       {
//         id: '5',
//         label: 'Mutation of aligned Arrays',
//       },
//       {
//         id: '6',
//         label: 'Event loop',
//       },
//       {
//         id: '7',
//         label: 'Async await callbacks',
//       },
//       {
//         id: '8',
//         label: 'JS Engines',
//       },
//       {
//         id: '9',
//         label: 'Copying',
//       },
//       {
//         id: '10',
//         label: 'Hosting & TDZ',
//       },
//       {
//         id: '11',
//         label: 'Diff between var, let and const',
//       },
//       {
//         id: '12',
//         label: 'Lexical scoping, scope chaining',
//       },
//       {
//         id: '13',
//         label: 'JS Execution context',
//       },
//     ],
//   },
//   {
//     id: '14',
//     label: 'PayPal',
//     children: [
//       {
//         id: '15',
//         label: 'sql',
//       },
//       {
//         id: '16',
//         label: 'html',
//       },
//       {
//         id: '17',
//         label: 'mysql',
//       },
//       {
//         id: '18',
//         label: 'databases',
//       },
//       {
//         id: '19',
//         label: 'css3',
//       },
//       {
//         id: '20',
//         label: 'vue',
//       },
//       {
//         id: '21',
//         label: 'tables',
//       },
//       {
//         id: '22',
//         label: 'Mvc',
//       },
//       {
//         id: '23',
//         label: 'Bootstrap',
//       },
//       {
//         id: '24',
//         label: 'Remote checklist',
//       },
//       {
//         id: '25',
//         label: 'Remote checklist',
//       },
//     ],
//   },
//   {
//     id: '26',
//     label: 'React',
//     children: [
//       {
//         id: '27',
//         label: 'Virtual Dom',
//       },
//       {
//         id: '28',
//         label: 'States and Props',
//       },
//       {
//         id: '29',
//         label: 'Lifecycle hooks',
//       },
//       {
//         id: '30',
//         label: 'State management',
//       },
//       {
//         id: '31',
//         label: 'Custom hooks',
//       },
//       {
//         id: '32',
//         label: 'HOC',
//       },
//       {
//         id: '33',
//         label: 'Error Boundaries',
//       },
//       {
//         id: '34',
//         label: 'Context',
//       },
//       {
//         id: '35',
//         label: 'Reconciliation',
//       },
//       {
//         id: '36',
//         label: 'Batching in react',
//       },
//       {
//         id: '37',
//         label: 'React fiber',
//       },
//       {
//         id: '38',
//         label: 'Search with autocomplete',
//       },
//       {
//         id: '39',
//         label: 'Conditional Stmt',
//       },
//       {
//         id: '40',
//         label: 'Pagination',
//       },
//       {
//         id: '41',
//         label: 'Infinite scroll',
//       },
//       {
//         id: '42',
//         label: 'Stepper',
//       },
//     ],
//   },
//   {
//     id: '43',
//     label: 'Machine Coding questions',
//     children: [
//       {
//         id: '44',
//         label: 'Todo List',
//       },
//       {
//         id: '45',
//         label: 'Search Bar',
//       },
//       {
//         id: '46',
//         label: 'Shopping Cart',
//       },
//       {
//         id: '47',
//         label: 'Pagination Component',
//       },
//       {
//         id: '48',
//         label: 'Modal Component',
//       },
//       {
//         id: '49',
//         label: 'Data and Drag Component',
//       },
//       {
//         id: '50',
//         label: 'Real-Time Chat Application',
//       },
//       {
//         id: '51',
//         label: 'Tic-Tac-Toe Game',
//       },
//       {
//         id: '52',
//         label: 'Memory Game',
//       },
//       {
//         id: '53',
//         label: 'Sidebar Snake',
//       },
//       {
//         id: '54',
//         label: 'Counter',
//       },
//       {
//         id: '55',
//         label: 'Counter (reducer)',
//       },
//       {
//         id: '56',
//         label: 'Counter (redux)',
//       },
//     ],
//   },
//   {
//     id: '57',
//     label: 'Frontend Interview',
//     children: [
//       {
//         id: '58',
//         label: 'Next.js',
//       },
//       {
//         id: '59',
//         label: 'React Native',
//       },
//       {
//         id: '60',
//         label: 'Object based questions',
//       },
//       {
//         id: '61',
//         label: 'Polyfill',
//       },
//       {
//         id: '62',
//         label: 'Webpack',
//       },
//       {
//         id: '63',
//         label: 'Using browser devtools',
//       },
//       {
//         id: '64',
//         label: 'Code splitting',
//       },
//       {
//         id: '65',
//         label: 'Web vitals',
//       },
//       {
//         id: '66',
//         label: 'Tree shaking',
//       },
//       {
//         id: '67',
//         label: 'Web Workers',
//       },
//       {
//         id: '68',
//         label: 'Service Workers',
//       },
//     ],
//   },
//   {
//     id: '69',
//     label: 'Custom Hooks',
//     children: [
//       {
//         id: '70',
//         label: 'useDebounce',
//       },
//       {
//         id: '71',
//         label: 'useInterval',
//       },
//       {
//         id: '72',
//         label: 'useDisclosure',
//       },
//       {
//         id: '73',
//         label: 'useIntersection',
//       },
//       {
//         id: '74',
//         label: 'useClickOutside',
//       },
//       {
//         id: '75',
//         label: 'useToggle',
//       },
//       {
//         id: '76',
//         label: 'usePrevious',
//       },
//       {
//         id: '77',
//         label: 'useEventListener',
//       },
//       {
//         id: '78',
//         label: 'useLocalStorage',
//       },
//       {
//         id: '79',
//         label: 'useSessionStorage',
//       },
//       {
//         id: '80',
//         label: 'useCounter',
//       },
//       {
//         id: '81',
//         label: 'useToggle',
//       },
//       {
//         id: '82',
//         label: 'useCounter',
//       },
//       {
//         id: '83',
//         label: 'useBoolean',
//       },
//       {
//         id: '84',
//         label: 'useClipboard',
//       },
//       {
//         id: '85',
//         label: 'useAsync',
//       },
//       {
//         id: '86',
//         label: 'useIsomorphicLayoutEffect',
//       },
//     ],
//   },
//   {
//     id: '87',
//     label: 'CSS',
//     children: [
//       {
//         id: '88',
//         label: 'CSS Box model',
//       },
//       {
//         id: '89',
//         label: 'CSS Specificity',
//       },
//       {
//         id: '90',
//         label: 'position absolute and relative diff',
//       },
//       {
//         id: '91',
//         label: 'BEM convention model',
//       },
//       {
//         id: '92',
//         label: 'SASS and other preprocessors',
//       },
//       {
//         id: '93',
//         label: 'CSS for',
//       },
//     ],
//   },
//   {
//     id: '94',
//     label: 'Testing',
//     children: [
//       {
//         id: '95',
//         label: 'TypeScript',
//       },
//       {
//         id: '96',
//         label: 'Web performance',
//       },
//     ],
//   },
//   {
//     id: '97',
//     label: 'DOM Manipulation',
//     children: [
//       {
//         id: '98',
//         label: 'Big Calendar | FullCalendar',
//       },
//       {
//         id: '99',
//         label: 'Largest Contentful Paint (LCP)',
//       },
//       {
//         id: '100',
//         label: 'Cumulative Layout Shift (CLS)',
//       },
//       {
//         id: '101',
//         label: 'Interaction to Next Paint (INP)',
//       },
//       {
//         id: '102',
//         label: 'ESG',
//       },
//     ],
//   },
// ]

const topics = [
  {
    id: '1',
    label: 'Frontend Interview',
    type: 'titleNode',
    // slug: '',
    children: [
      {
        id: '2',
        label: 'JS Fundamentals',
        type: 'custom',
        slug: 'js_fundamentals',
        children: [
          {
            id: '2.1',
            label: 'Conceptual Questions',
            type: 'custom',
            slug: 'conceptual_questions',
          },
          {
            id: '2.2',
            label: 'Polyfills',
            type: 'custom',
            slug: 'polyfills',
          },
          {
            id: '2.3',
            label: 'Output Based Questions',
            type: 'custom',
            slug: 'output_based_questions',
          },
        ],
      },
      {
        id: '3',
        label: 'React',
        type: 'custom',
        slug: 'react',
      },
      {
        id: '4',
        label: 'Machine Coding Questions',
        type: 'custom',
        slug: 'machine_coding',
      },

      {
        id: '6',
        label: 'Web Performance',
        type: 'custom',
        slug: 'web_performance',
      },
      {
        id: '7',
        label: 'Tooling',
        type: 'custom',
        slug: 'tooling',
      },
      {
        id: '8',
        label: 'CSS',
        type: 'custom',
        slug: 'css',
      },
    ],
  },
]

export { topics }
