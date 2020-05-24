import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'server/src/server.js',
    output: {
      file: 'build/server.js',
      format: 'cjs', // use the CommonJS format, which works with Node
    },
    plugins: [resolve()], // use the node-resolve plugin to import dependencies properly
  }
];
