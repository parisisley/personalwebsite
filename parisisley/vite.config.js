export default {
  build: {
    outDir: 'dist',  // Output directory
    assetsDir: 'assets',  // Directory for static assets (images, fonts, etc.)
    rollupOptions: {
      input: 'index.html', // Ensure proper entry file
    },
  },
};
