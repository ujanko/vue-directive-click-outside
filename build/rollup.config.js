// Handle .vue SFC files
import vue from 'rollup-plugin-vue';
// Transpile/polyfill with reasonable browser support
import buble from 'rollup-plugin-buble';

export default {
  // Path relative to package.json
  input: 'src/wrapper.js',
  output: {
    name: 'ClickOutside',
    exports: 'named',
  },
  plugins: [
    vue(),
    // Transpile to ES5
    buble(),
  ],
};