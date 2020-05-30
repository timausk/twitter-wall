import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'server/src/server.js',
    output: {
      file: 'build/server.js',
      format: 'cjs', // use the CommonJS format, which works with Node
    },
    plugins: [resolve()], // use the node-resolve plugin to import dependencies properly
  },
  {
    input: 'client/src/client.js',
    output: {
      file: 'build/client.js',
      format: 'es', // ES Module format for modern browsers
      name: 'client',
    },
    plugins: [
      resolve(),
      postcss({
        extract: 'main.css',
        modules: false,
        use: ['sass'],
        minimize: false
      })
    ],
  }
];
