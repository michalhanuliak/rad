module.exports = {
  toDoList: {
    input: {
      target: './input.yaml',
    },
    output: {
      mode: 'tags-split',
      target: '../src/generated/api',
      schemas: '../src/generated/schemas',
      client: 'react-query',
      baseUrl: 'http://localhost:4000',
      mock: true,
      override: {
        mutator: {
          path: '../src/config/mutator.ts',
          name: 'apiClientMutator',
        },
      },
    },
  },
};
