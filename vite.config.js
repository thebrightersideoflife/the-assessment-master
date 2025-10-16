export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      hooks: path.resolve(__dirname, './src/hooks'),
      utils: path.resolve(__dirname, './src/utils'),
      store: path.resolve(__dirname, './src/store'),
      data: path.resolve(__dirname, './src/data'),
      styles: path.resolve(__dirname, './src/styles'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});
