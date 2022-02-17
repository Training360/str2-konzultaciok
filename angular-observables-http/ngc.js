const NgcEsbuild = require('ngc-esbuild');

new NgcEsbuild({
  entryPoints: ['src/main.ts'],
  outdir: 'dist/es2',
  minify: false,
  open: false,
  serve: false,
  watch: false,
  port: 9855,
  sourcemap: false,
});
