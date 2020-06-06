import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const buildProduction = process.env.BUILD === 'production';
const outputFilename = buildProduction ? 'main.min.js' : 'main.js';
const postCss = {
  extract: buildProduction ? 'main.min.css' : 'main.css',
  minimize: buildProduction
};

export default {
  input: 'client/src/main.js',
  output: {
    file: `build/${outputFilename}`,
    format: 'es'
  },
  plugins: [
    resolve(),
    terser(),
    postcss({
      extract: postCss.extract,
      modules: false,
      use: ['sass'],
      minimize: postCss.minimize
    })
  ],
};
