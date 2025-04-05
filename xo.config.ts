import {type FlatXoConfig} from 'xo';

const xoConfig: FlatXoConfig = [
  {
    space: true,
    prettier: true,
    react: true,
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'unicorn/filename-case': ['error', {case: 'pascalCase'}],
    },
  },
];

export default xoConfig;
