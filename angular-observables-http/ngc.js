const NgcEsbuild = require('ngc-esbuild');

new NgcEsbuild({
  main: 'src/main.ts',
  outpath: 'dist/es2',
  minify: true,
  open: false,
  port: 9855,
  sourcemap: true,
});
