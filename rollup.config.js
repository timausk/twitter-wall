import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'client/src/client.js',
    output: {
      file: 'build/client.js',
      format: 'es',
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
