import esbuild from 'esbuild';
import mdx from '@mdx-js/esbuild';

await esbuild.build({
  entryPoints: ['App.jsx'],
  outfile: 'output.js',
  format: 'esm',
  plugins: [
    mdx({
      /* Options… */
    }),
  ],
});
